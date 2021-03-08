const versions = require("./versions.json");

const latestVersion = versions[0];

const config = {
  title: "driftctl-docs",
  tagline: "Detect, track and alert on infrastructure drift",
  url: "https://docs.driftctl.com",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "cloudskiff",
  projectName: "driftctl-docs",
  themeConfig: {
    navbar: {
      title: "driftctl",
      logo: {
        alt: "driftctl Logo",
        src: "img/driftctl_light.svg",
        srcDark: "img/driftctl_dark.svg",
      },
      items: [
        {
          to: "/",
          activeBasePath: "/",
          label: "Docs",
          position: "left",
        },
        {
          type: "docsVersionDropdown",
          position: "right",
          dropdownActiveClassDisabled: true,
          dropdownItemsAfter: [
            {
              to: "/versions",
              label: "All versions",
            },
          ],
        },
        {
          href: "https://discord.gg/NMCBxtD7Nd",
          label: "Discord",
          position: "right",
          "aria-label": "Discord server",
        },
        {
          href: "https://twitter.com/driftctl",
          label: "Twitter",
          position: "right",
          "aria-label": "Twitter account",
        },
        {
          href: "https://github.com/cloudskiff/driftctl",
          label: "GitHub",
          position: "right",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © 2020-${new Date().getFullYear()} CloudSkiff.`,
    },
    metadatas: [
      {name: 'og:type', content: 'website'},
      {name: 'og:image', content: 'https://docs.driftctl.com/img/preview.png'}
    ],
  },
  presets: [],
};

const classicPreset = ["@docusaurus/preset-classic"];

const docs = {
  path: "./docs",
  routeBasePath: "/",
  sidebarPath: require.resolve("./sidebars.js"),
  editUrl: "https://github.com/cloudskiff/driftctl-docs/edit/main/",
  versions: {},
};

docs.versions[latestVersion] = {
  path: latestVersion,
};

const theme = {
  customCss: require.resolve("./src/css/custom.css"),
};

classicPreset.push({
  docs,
  theme,
});

config.presets.push(classicPreset);

module.exports = config;
