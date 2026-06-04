module.exports = {
  apps: [
    {
      name: "iotsight",
      cwd: __dirname,
      script: "dist/server.cjs",
      env: {
        NODE_ENV: "production",
        PORT: process.env.PORT || 3005,
      },
    },
  ],
};
