module.exports = {
  docs: {
    Introduction: ["intro", "installation", "limitations"],
    Usage: [
      {
        Commands: [
          {
            Scan: ["usage/cmd/scan/iac-source", "usage/cmd/scan/output", "usage/cmd/scan/filtering"],
            Completion: ["usage/cmd/completion/script"],
          },
        ],
        Flags: ["usage/flags/error-reporting", "usage/flags/version-check"],
      }
    ],
    Providers: [
      {
        AWS: ["providers/aws/authentication", "providers/aws/resources"],
      },
    ],
  },
};
