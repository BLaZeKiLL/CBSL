module.exports = {
  title: 'CBSL',
  tagline: 'Runtime components too author game logic',
  url: 'https://blazekill.github.io',
  baseUrl: '/CBSL/',
  organizationName: 'codeblaze',
  projectName: 'cbsl',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  themeConfig: {
    prism: {
      theme: require('./code_theme'),
      additionalLanguages: ['csharp']
    },
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
              to: '/',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/channel/UC_qfPIYfXOvg0SDAc8Z68WA',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/BLaZeKiLL/CBSL',
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
          editUrl: 'https://github.com/BLaZeKiLL/CBSL/edit/master/Docs',
          routeBasePath: '/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
