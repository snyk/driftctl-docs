const versions = require('./versions.json');

const latestVersion = versions[0];

const config = {
  title: 'driftctl-docs',
  tagline: 'Detect, track and alert on infrastructure drift',
  url: 'https://docs.driftctl.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'snyk',
  projectName: 'driftctl-docs',
  themeConfig: {
    navbar: {
      title: 'driftctl',
      logo: {
        alt: 'driftctl Logo',
        src: 'img/driftctl_light.svg',
        srcDark: 'img/driftctl_dark.svg',
      },
      items: [
        {
          to: '/',
          activeBasePath: '/',
          label: 'Docs',
          position: 'left',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
          dropdownItemsAfter: [
            {
              to: '/versions',
              label: 'All versions',
            },
          ],
        },
        {
          href: 'https://discord.gg/7zHQ8r2PgP',
          label: 'Discord',
          position: 'right',
          'aria-label': 'Discord server',
        },
        {
          href: 'https://twitter.com/driftctl',
          label: 'Twitter',
          position: 'right',
          'aria-label': 'Twitter account',
        },
        {
          href: 'https://github.com/snyk/driftctl',
          label: 'GitHub',
          position: 'right',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © 2020-${new Date().getFullYear()} Snyk Ltd.`,
    },
    metadata: [
      { name: 'og:type', content: 'website' },
      {
        name: 'og:image',
        content: 'https://docs.driftctl.com/img/preview.png',
      },
    ],
  },
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: `/${latestVersion}/installation`,
            from: '/installation',
          },
          {
            to: `/${latestVersion}/limitations`,
            from: '/limitations',
          },
          {
            to: `/${latestVersion}/ci_cd/intro`,
            from: '/ci_cd',
          },
          {
            to: `/${latestVersion}/providers/aws/authentication`,
            from: '/aws/policy',
          },
          {
            to: `/${latestVersion}/providers/github/authentication`,
            from: '/github/policy',
          },
          {
            to: `/${latestVersion}/providers/google/authentication`,
            from: '/google/policy',
          },
        ],
      },
    ],
  ],
  presets: [],
};

const classicPreset = ['@docusaurus/preset-classic'];

const docs = {
  path: './docs',
  routeBasePath: '/',
  sidebarPath: require.resolve('./sidebars.js'),
  editUrl: 'https://github.com/snyk/driftctl-docs/edit/main/',
  versions: {},
};

docs.versions[latestVersion] = {
  path: latestVersion,
};

const theme = {
  customCss: require.resolve('./src/css/custom.css'),
};

classicPreset.push({
  docs,
  theme,
});

config.presets.push(classicPreset);

module.exports = config;
