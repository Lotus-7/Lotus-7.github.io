import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Lotus-7',
  tagline: 'AI Design Engineer',
  favicon: 'img/favicon.ico',
  url: 'https://lotus-7.github.io',
  baseUrl: '/',
  organizationName: 'Lotus-7',
  projectName: 'Lotus-7.github.io',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: false, // Disable docs for now as we focus on custom pages
        blog: {
          routeBasePath: 'thinking', // Rename blog to thinking
          showReadingTime: true,
          blogTitle: '想法与洞察',
          blogDescription: '关于 AI、产品与设计的胡思乱想',
          postsPerPage: 5,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: '所有文章',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true, // 强制深色模式，保持设计风格统一
      respectPrefersColorScheme: false,
    },
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Lotus-7',
      logo: {
        alt: 'Lotus-7 Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/projects', label: 'Home', position: 'right'},
        {to: '/tools', label: 'Tools', position: 'right'},
        {to: '/thinking', label: 'Thinking', position: 'right'},
        {to: '/about', label: 'About', position: 'right'},
        {href: 'mailto:contact@lotus-7.com', label: 'Contact', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Explore',
          items: [
            { label: '作品集', to: '/projects' },
            { label: '小工具', to: '/tools' },
            { label: '碎碎念', to: '/thinking' },
          ],
        },
        {
          title: 'Link',
          items: [
            { label: 'GitHub', href: 'https://github.com/Lotus-7' },
            /*{ label: 'Twitter', href: 'https://twitter.com/Lotus-7' },*/
            { label: 'Email', href: 'mailto:contact@lotus-7.com' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Lotus-7.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
