import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import markdownItKatex from 'markdown-it-katex'

const repository = process.env.GITHUB_REPOSITORY
const [owner, repositoryName] = repository?.split('/') ?? []
const isUserOrOrganizationSite = repositoryName === `${owner}.github.io`
const base = repository
  ? isUserOrOrganizationSite
    ? '/'
    : `/${repositoryName}/`
  : '/'

const englishSidebar = [
  {
    text: 'Start Here',
    items: [
      { text: 'Why Odyssey?', link: '/why-odyssey' },
      { text: 'Design Principles', link: '/design-principles' },
    ],
  },
  {
    text: 'Key Decisions',
    items: [
      { text: 'Why Two Canvas Levels?', link: '/core-concepts/two-level-canvas' },
      { text: 'Why Relationships Before Roles?', link: '/core-concepts/pattern' },
      { text: 'Why Bounded Autonomy?', link: '/core-concepts/bounded-autonomy' },
      { text: 'Why Knowledge Space Is More Than RAG', link: '/core-concepts/knowledge-space-more-than-rag' },
    ],
  },
  {
    text: 'Design Journey',
    items: [
      {
        text: 'Design Evolution',
        link: '/design-evolution',
        items: [
          { text: 'How the Odyssey Mark Took Shape', link: '/design-evolution/odyssey-mark' },
        ],
      },
      { text: 'Current State and Limitations', link: '/current-state-and-limitations' },
    ],
  },
]

const chineseSidebar = [
  {
    text: '从这里开始',
    items: [
      { text: '为什么是 Odyssey', link: '/zh/why-odyssey' },
      { text: '设计原则', link: '/zh/design-principles' },
    ],
  },
  {
    text: '设计决策',
    items: [
      { text: '为什么是双层 Canvas', link: '/zh/core-concepts/two-level-canvas' },
      { text: '关系先于角色', link: '/zh/core-concepts/pattern' },
      { text: '为什么需要有边界的自主性', link: '/zh/core-concepts/bounded-autonomy' },
      { text: '为什么 Knowledge Space 不只是 RAG', link: '/zh/core-concepts/knowledge-space-more-than-rag' },
    ],
  },
  {
    text: '设计进程',
    items: [
      {
        text: '设计演化',
        link: '/zh/design-evolution',
        items: [
          { text: 'Odyssey 图标是如何形成的', link: '/zh/design-evolution/odyssey-mark' },
        ],
      },
      { text: '当前状态与限制', link: '/zh/current-state-and-limitations' },
    ],
  },
]

export default withMermaid(
  defineConfig({
    title: 'Odyssey',
    description: 'Odyssey documentation',
    base,
    cleanUrls: true,
    lastUpdated: true,
    locales: {
      root: {
        label: 'English',
        lang: 'en',
        link: '/core-concepts/two-level-canvas',
        themeConfig: {
          nav: [
            { text: 'Docs', link: '/core-concepts/two-level-canvas' },
            { text: 'Figma Design ↗', link: 'https://www.figma.com/design/P3EF9io2DhyhwkNYBVqB5Z/Odyssey-Design?node-id=144-2' },
            { text: 'GitHub', link: 'https://github.com/riverLiang008/odyssey-architecture' },
          ],
          sidebar: englishSidebar,
          outline: { label: 'On this page' },
          lastUpdated: { text: 'Last updated' },
          editLink: {
            pattern: 'https://github.com/riverLiang008/odyssey-architecture/edit/main/:path',
            text: 'Edit this page on GitHub',
          },
          docFooter: {
            prev: 'Previous page',
            next: 'Next page',
          },
        },
      },
      zh: {
        label: '简体中文',
        lang: 'zh-CN',
        link: '/zh/core-concepts/two-level-canvas',
        themeConfig: {
          nav: [
            { text: '设计文档', link: '/zh/core-concepts/two-level-canvas' },
            { text: 'Figma 设计 ↗', link: 'https://www.figma.com/design/P3EF9io2DhyhwkNYBVqB5Z/Odyssey-Design?node-id=144-2' },
            { text: 'GitHub', link: 'https://github.com/riverLiang008/odyssey-architecture' },
          ],
          sidebar: chineseSidebar,
          outline: { label: '本页目录' },
          lastUpdated: { text: '最后更新' },
          editLink: {
            pattern: 'https://github.com/riverLiang008/odyssey-architecture/edit/main/:path',
            text: '在 GitHub 上编辑此页',
          },
          docFooter: {
            prev: '上一页',
            next: '下一页',
          },
        },
      },
    },
    markdown: {
      config: (md) => md.use(markdownItKatex),
    },
    mermaid: {
      theme: 'default',
    },
    themeConfig: {
      logo: '/images/brand/odyssey-mark-v6.svg',
      search: { provider: 'local' },
      socialLinks: [
        { icon: 'github', link: 'https://github.com/riverLiang008/odyssey-architecture' },
      ],
      footer: {
        message: 'Odyssey documentation · v3.0 (Latest)',
      },
    },
  }),
)
