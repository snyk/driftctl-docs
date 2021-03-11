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
              Scan: ["usage/cmd/scan/iac-source", "usage/cmd/scan/output"],
              Completion: ["usage/cmd/completion/script"],
            },
          ],
        },
        {
          Flags: ["usage/flags/error-reporting", "usage/flags/version-check"],
        },
        {
          Filtering: ["usage/filtering/driftignore", "usage/filtering/rules"],
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
    },
    {
      type: 'category',
      label: 'CI/CD',
      items: [
          "ci_cd/intro",
        {
          Guides: [
              "ci_cd/guides/circleci",
              "ci_cd/guides/ghaction",
              "ci_cd/guides/gitlabci"
          ]
        }
      ],
    }
  ],
};
