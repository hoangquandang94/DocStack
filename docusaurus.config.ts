import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'DocStack',
  tagline: 'Kho Tri Thức & Cẩm Nang Kỹ Thuật Dành Cho Toàn Bộ Team',
  favicon: 'img/favicon.ico',

  url: 'https://hoangquandang94.github.io',
  baseUrl: '/DocStack/',

  organizationName: 'hoangquandang94',
  projectName: 'DocStack',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        indexDocs: true,
        indexBlog: true,
        docsRouteBasePath: '/docs',
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'DocStack',
      logo: {
        alt: 'DocStack Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '📖 Tài Liệu Tổng Hợp',
        },
        {to: '/blog', label: '📢 Bản Tin & Release', position: 'left'},
        {
          href: 'https://github.com',
          label: 'GitHub Team',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Khối Kỹ Thuật',
          items: [
            {
              label: 'Kiến Trúc .NET Backend',
              to: '/docs/dotnet-backend/overview-guidelines',
            },
            {
              label: 'Frontend Guidelines',
              to: '/docs/frontend/frontend-overview',
            },
            {
              label: 'DevOps & Docker CI/CD',
              to: '/docs/devops-ci-cd/cicd-docker-guide',
            },
          ],
        },
        {
          title: 'Nghiệp Vụ & Chất Lượng',
          items: [
            {
              label: 'Cẩm Nang BA & User Story',
              to: '/docs/ba/ba-overview',
            },
            {
              label: 'Quy Trình Kiểm Thử QA',
              to: '/docs/qa-testing/qa-overview',
            },
          ],
        },
        {
          title: 'Liên Kết',
          items: [
            {
              label: 'Bản Tin Tech',
              to: '/blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DocStack Team. Xây dựng với Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['csharp', 'bash', 'json', 'docker', 'yaml'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
