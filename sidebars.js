module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      items: ["intro", "installation", "limitations"],
    },
    {
      type: 'category',
      label: 'Usage',
      items: [
        {
          Commands: [
            {
              Scan: ["usage/cmd/scan/iac-source", "usage/cmd/scan/output", "usage/cmd/scan/filtering"],
              Completion: ["usage/cmd/completion/script"],
            },
          ],
        },
        {
          Flags: ["usage/flags/error-reporting", "usage/flags/version-check"],
        },
        'usage/log-level',
      ],
    },
    {
      type: 'category',
      label: 'Providers',
      items: [
        {
          AWS: ["providers/aws/authentication", "providers/aws/resources"],
          GitHub: ["providers/github/authentication", "providers/github/resources"],
        },
      ],
    }
  ],
};
