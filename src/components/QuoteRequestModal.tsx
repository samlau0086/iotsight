import { X } from 'lucide-react';
import QuoteRequestForm from './QuoteRequestForm';

type QuoteRequestModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  lockedInquiryType: string;
  lockedInquirySubject: string;
  lockedInquirySource: string;
  analyticsFormName: string;
  submitLabel?: string;
  successTitle?: string;
  successMessage?: string;
  successChecklist?: string[];
};

export default function QuoteRequestModal({
  isOpen,
  onClose,
  title,
  description,
  lockedInquiryType,
  lockedInquirySubject,
  lockedInquirySource,
  analyticsFormName,
  submitLabel,
  successTitle,
  successMessage,
  successChecklist,
}: QuoteRequestModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/80 px-4 py-6 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl rounded-2xl border border-slate-700 bg-slate-800 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close inquiry form"
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition hover:bg-slate-700 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="border-b border-slate-700 px-6 py-6 sm:px-8">
          <h2 className="pr-12 text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>{title}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">{description}</p>
        </div>

        <div className="px-6 py-6 sm:px-8">
          <QuoteRequestForm
            lockedInquiryType={lockedInquiryType}
            lockedInquirySubject={lockedInquirySubject}
            lockedInquirySource={lockedInquirySource}
            analyticsFormName={analyticsFormName}
            submitLabel={submitLabel}
            successTitle={successTitle}
            successMessage={successMessage}
            successChecklist={successChecklist}
            onSuccessSecondaryAction={onClose}
            successSecondaryLabel="Close"
          />
        </div>
      </div>
    </div>
  );
}
