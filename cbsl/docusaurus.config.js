module.exports = {
  title: 'CBSL',
  tagline: 'Runtime components too author game logic',
  url: 'https://BLaZeKiLL.github.io',
  baseUrl: '/cbsl/',
  organizationName: 'codeblaze',
  projectName: 'cbsl',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  themeConfig: {
    navbar: {
      title: 'CBSL',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/',
          label: 'Docs',
          position: 'left',
        },
        { 
          to: '/changelog', 
          label: 'Changelog', 
          position: 'left'
        },
        {
          href: 'https://github.com/BLaZeKiLL/CBSL',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CodeBlaze, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/BLaZeKiLL/CBSL/edit/master/cbsl',
          routeBasePath: '/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
