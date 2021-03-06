module.exports = {
  title: 'CBSL',
  tagline: 'Runtime components too author game logic',
  url: 'https://cbsl.netlify.app',
  baseUrl: '/',
  organizationName: 'codeblaze',
  projectName: 'cbsl',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  themeConfig: {
    prism: {
      theme: require('./code_theme'),
      additionalLanguages: ['csharp']
    },
    navbar: {
      title: 'CBSL',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo_light.svg',
        srcDark: 'img/logo_dark.svg'
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
  scripts: [{
    src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    'data-ad-client': 'ca-pub-1180153293586382',
    async: true,
  }]
};
