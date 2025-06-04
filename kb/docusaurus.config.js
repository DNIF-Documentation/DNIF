// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KB for Seamless Security ',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/cropped-DNIF-Emblem-Small-Transparent.ico',

  url: 'https://dnif.it',
  baseUrl: '/DNIF/',

  organizationName: 'dnif.it',
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
          srcDark: 'img/DNIF-Logoset-Reversed-Small-Transparent.png',
        },
        items: [
         {
  label: 'Knowledge Base',
  position: 'left',
  type: 'dropdown',
  items: [{
                type: 'docSidebar',
                sidebarId: 'sidebar',
                label: 'Welcome to DNIF',
                icon: 'rocket',
              },
              {
                type: 'docSidebar',
                sidebarId: 'sidebar',
                label: 'Connect, Extract, and Enrich',
                icon: 'settings',
              },
              {
                type: 'docSidebar',
                sidebarId: 'sidebar',
                label: 'Hunting with Workbooks',
                icon: 'article',
              },
              {
                type: 'docSidebar',
                sidebarId: 'sidebar',
                label: 'DNIF Query Language',
                icon: 'grid_view',
              },
              {
                type: 'docSidebar',
                sidebarId: 'sidebar',
                label: 'Security Monitoring',
                icon: 'security',
              },
              {
                type: 'docSidebar',
                sidebarId: 'sidebar',
                label: 'User Management and Access Control',
                icon: 'manage_accounts',
              },
              {
                type: 'docSidebar',
                sidebarId: 'sidebar',
                label: 'Solution Design',
                icon: 'dashboard',
              },
              {
                type: 'docSidebar',
                sidebarId: 'sidebar',
                label: 'Operations',
                icon: 'notifications',
              },
              {
                type: 'docSidebar',
                sidebarId: 'sidebar',
                label: 'Platform Services',
                icon: 'stacked_line_chart',
              },
              {
                type: 'docSidebar',
                sidebarId: 'sidebar',
                label: 'Troubleshooting and Debugging',
                icon: 'stacked_line_chart',
              },
              {
                type: 'docSidebar',
                sidebarId: 'sidebar',
                label: 'DNIF AI',
                icon: 'speed',
              },
              {
                type: 'docSidebar',
                sidebarId:'sidebar',
                label: 'License Management and Billing',
                icon: 'settings_suggest',
              },
              {
                type: 'docSidebar',
                sidebarId: 'sidebar',
                label: 'DNIF Legal and Security Compliance',
                icon: 'account_tree',
              },
              {
                type: 'docSidebar',
                sidebarId: 'sidebar',
                label: 'Policies',
                icon: 'account_tree',
              },
              {
                type: 'docSidebar',
                sidebarId: 'sidebar',
                label: 'PICO',
                icon: 'account_tree',
              },
              {
                type: 'docSidebar',
                sidebarId: 'sidebar',
                label: 'Security Bulletins',
                icon: 'account_tree',
              },
              {
                type: 'docSidebar',
                sidebarId: 'sidebar',
                label: 'Best Practices',
                icon: 'account_tree',
              },
    
            ]
          },
          {
            type: 'doc',
            docId: 'documents/Release-Notes/april-17-2025-content-update',
            position: 'left',
            label: 'Release Notes'
          },
          {
            type: 'search',
            position: 'left',
          },

          {
            label: ' DNIF HYPERSCALE',
            to: '#',
            position: 'right',
            type: 'docSidebar',
            sidebarId: 'sidebarForOnPrem',
            className: 'navbar-hyperscale-btn',
          },


           {
            label: ' DNIF HYPERCLOUD',
            to: '#',
            position: 'right',
            type: 'docSidebar',
            sidebarId: 'sidebar',
            className: 'navbar-hypercloud-btn',
          },
          {
            label: 'SUPPORT',
            position: 'right',
            to: '#',
            type: 'dropdown',
            className: 'navbar-support-btn',
            items:[{
                label: 'Contact Us',
                to: 'https://dnif.it/contact/',
                
              },
              {
                label: 'Schedule a Demo',
                to: 'https://dnif.it/dnif-hypercloud-product-tour/',
              
              },
            ]}
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'X',
        //         href: 'https://x.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        // ],
        copyright: ` © ${new Date().getFullYear()}  NETMONASTERY SYSTEMS INC. All rights reserved.`,
      },
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
        indexName: 'dnif-umentationio', // TODO: Replace with your actual index name
        contextualSearch: false,
        // searchParameters: {},
        // searchPagePath: 'search',
      },
    }),
};

export default config;
