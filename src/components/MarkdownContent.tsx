import Markdown from 'react-markdown';

type MarkdownContentProps = {
  children: string;
};

const splitTableRow = (line: string) => {
  const trimmed = line.trim();
  const withoutEdges = trimmed.replace(/^\|/, '').replace(/\|$/, '');

  return withoutEdges.split('|').map((cell) => cell.trim());
};

const isTableDivider = (line: string) => {
  const cells = splitTableRow(line);

  return cells.length > 1 && cells.every((cell) => /^:?-{3,}:?$/.test(cell));
};

const createTableCell = (value: string, tagName: 'th' | 'td') => ({
  type: 'tableCell',
  data: {
    hName: tagName,
  },
  children: value
    ? [
        {
          type: 'text',
          value,
        },
      ]
    : [],
});

const createTableRow = (cells: string[], cellTagName: 'th' | 'td') => ({
  type: 'tableRow',
  data: {
    hName: 'tr',
  },
  children: cells.map((cell) => createTableCell(cell, cellTagName)),
});

function remarkPipeTables() {
  return (tree: any) => {
    const visit = (node: any) => {
      if (!node?.children) return;

      node.children = node.children.map((child: any) => {
        if (child.type !== 'paragraph' || child.children?.length !== 1 || child.children[0].type !== 'text') {
          visit(child);
          return child;
        }

        const lines = String(child.children[0].value || '')
          .split(/\r?\n/)
          .map((line) => line.trim())
          .filter(Boolean);

        if (lines.length < 3 || !lines[0].includes('|') || !isTableDivider(lines[1])) {
          return child;
        }

        const header = splitTableRow(lines[0]);
        const bodyRows = lines.slice(2).map(splitTableRow);
        const columnCount = header.length;

        if (columnCount < 2 || bodyRows.some((row) => row.length !== columnCount)) {
          return child;
        }

        return {
          type: 'table',
          data: {
            hName: 'table',
          },
          align: new Array(columnCount).fill(null),
          children: [createTableRow(header, 'th'), ...bodyRows.map((row) => createTableRow(row, 'td'))],
        };
      });

      node.children.forEach(visit);
    };

    visit(tree);
  };
}

export default function MarkdownContent({ children }: MarkdownContentProps) {
  return (
    <Markdown
      remarkPlugins={[remarkPipeTables]}
      components={{
        table: ({ children: tableChildren }) => (
          <div className="my-6 overflow-x-auto rounded-lg border border-slate-700">
            <table className="m-0 min-w-full divide-y divide-slate-700">{tableChildren}</table>
          </div>
        ),
        thead: ({ children: theadChildren }) => <thead className="bg-slate-950/80">{theadChildren}</thead>,
        tbody: ({ children: tbodyChildren }) => <tbody className="divide-y divide-slate-800">{tbodyChildren}</tbody>,
        th: ({ children: thChildren }) => (
          <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-200">{thChildren}</th>
        ),
        td: ({ children: tdChildren }) => <td className="px-4 py-3 align-top text-sm text-slate-300">{tdChildren}</td>,
      }}
    >
      {children}
    </Markdown>
  );
}
