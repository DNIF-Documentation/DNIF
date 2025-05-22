// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  url: 'https://dnif-documentation.github.io',
  baseUrl: '/DNIF/',

  organizationName: 'dnif-documentation',
  projectName: 'DNIF',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/dnif-logo.png',
      navbar: {
        logo: {
          alt: 'DNIF logo',
          src: 'img/dnif-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'sidebar',
            position: 'left',
            label: 'Knowledge Base',
          },
          {
            type: 'doc',
            docId: 'documents/Release-Notes/april-17-2025-content-update',
            position: 'left',
            label: 'Release Notes',
          },
          {
            type: 'search',
            position: 'right',
          },
          {
    type: 'html',
    position: 'right',
    value: `
      <input 
        type="text" 
        placeholder="Search Hyperscale..." 
        class="custom-navbar-search"
        onkeydown="if(event.key==='Enter'){window.location.href='/docs/search?q='+this.value;}"
      />
    `,
  },
          {
            label: ' Switch to Hyperscale',
            to: '#',
            position: 'right',
            type: 'docSidebar',
            sidebarId: 'sidebarForOnPrem',
            className: 'navbar-hyperscale-btn',
          },
        ],
      },
      // footer: {
      //   style: 'dark',
      //   links: [
      //     {
      //       title: 'Docs',
      //       items: [
      //         {
      //           label: 'Tutorial',
      //           to: '/docs/intro',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Community',
      //       items: [
      //         {
      //           label: 'Stack Overflow',
      //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //         },
      //         {
      //           label: 'Discord',
      //           href: 'https://discordapp.com/invite/docusaurus',
      //         },
      //         {
      //           label: 'X',
      //           href: 'https://x.com/docusaurus',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'More',
      //       items: [
      //         {
      //           label: 'Blog',
      //           to: '/blog',
      //         },
      //         {
      //           label: 'GitHub',
      //           href: 'https://github.com/facebook/docusaurus',
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      // },
       colorMode: {
        defaultMode: 'light',               // You can change to 'dark' if preferred
        disableSwitch: false,               // ✅ Allow toggle switch
        respectPrefersColorScheme: true,    // ✅ Automatically follow user's system preference
      },

      prism: {
        theme: prismThemes.github,
      },
      algolia: {
        appId: 'YY0TIP6BF9',
        apiKey: '201e3bd2346e3a0caf9868f6f16d3bbb',
        indexName: 'YOUR_INDEX_NAME', // TODO: Replace with your actual index name
        contextualSearch: true,
        searchParameters: {},
        searchPagePath: 'search',
      },
    }),
};

export default config;
