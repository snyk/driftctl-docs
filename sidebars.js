module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      items: ['intro', 'installation', 'usage', 'limitations'],
    },
    {
      type: 'category',
      label: 'Usage',
      items: [
        {
          Commands: [
            'usage/cmd/scan-usage',
            'usage/cmd/completion-usage',
            'usage/cmd/gen-driftignore-usage',
          ],
        },
        {
          Flags: [
            'usage/flags/crash-reporting',
            'usage/flags/version-check',
            'usage/flags/disable-telemetry',
          ],
        },
        {
          Filtering: ['usage/filtering/driftignore', 'usage/filtering/rules'],
        },
        'usage/log-level',
      ],
    },
    {
      type: 'category',
      label: 'Providers',
      items: [
        {
          AWS: ['providers/aws/authentication', 'providers/aws/resources'],
          GitHub: [
            'providers/github/authentication',
            'providers/github/resources',
          ],
          Google: [
            'providers/google/authentication',
            'providers/google/resources',
          ],
          Azure: [
            'providers/azure/authentication',
            'providers/azure/resources',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'CI/CD',
      items: [
        'ci_cd/intro',
        {
          Guides: [
            'ci_cd/guides/circleci',
            'ci_cd/guides/ghaction',
            'ci_cd/guides/gitlabci',
            'ci_cd/guides/jenkins',
          ],
        },
      ],
    },
  ],
};
