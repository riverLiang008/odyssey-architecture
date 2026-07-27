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

export default withMermaid(
  defineConfig({
    title: 'Odyssey',
    description: 'Odyssey documentation',
    base,
    cleanUrls: true,
    lastUpdated: true,
    markdown: {
      config: (md) => md.use(markdownItKatex),
    },
    mermaid: {
      theme: 'default',
    },
    themeConfig: {
      appearance: true,
      nav: [
        { text: 'Docs', link: '/introduction/introduction' },
        { text: 'Evolution', link: '/evolution/' },
        { text: 'GitHub', link: 'https://github.com/riverLiang008/odyssey-architecture' },
      ],
      sidebar: [
        {
          text: 'Introduction',
          items: [{ text: 'Introduction', link: '/introduction/introduction' }],
        },
        {
          text: 'Core Concepts',
          items: [
            { text: 'System', link: '/core-concepts/system' },
            { text: 'Pattern', link: '/core-concepts/pattern' },
            { text: 'Agent', link: '/core-concepts/agent' },
            { text: 'Canvas', link: '/core-concepts/canvas' },
            { text: 'Knowledge Space', link: '/core-concepts/knowledge-space' },
            { text: 'Tool', link: '/core-concepts/tool' },
            { text: 'Component Ecosystem', link: '/core-concepts/component-ecosystem' },
          ],
        },
        {
          text: 'Architecture',
          items: [
            { text: 'Level 1 — System', link: '/architecture/level-1-system' },
            { text: 'Level 2 — Execution Module', link: '/architecture/level-2-execution-module' },
            { text: 'Level 3 — Agent', link: '/architecture/level-3-agent' },
            { text: 'Level 4 — Node', link: '/architecture/level-4-node' },
          ],
        },
        {
          text: 'Benchmark',
          items: [
            { text: 'Claude Code', link: '/benchmark/claude-code' },
            { text: 'Coze', link: '/benchmark/coze' },
            { text: 'Dify', link: '/benchmark/dify' },
            { text: 'Amazon Bedrock', link: '/benchmark/amazon-bedrock' },
            { text: 'LangGraph', link: '/benchmark/langgraph' },
          ],
        },
        {
          text: 'Examples',
          items: [
            { text: 'Auto-generator', link: '/examples/auto-generator' },
            { text: 'WorldQuant Alpha', link: '/examples/worldquant-alpha' },
          ],
        },
      ],
      search: { provider: 'local' },
      socialLinks: [{ icon: 'github', link: 'https://github.com/riverLiang008/odyssey-architecture' }],
      editLink: {
        pattern: 'https://github.com/riverLiang008/odyssey-architecture/edit/main/:path',
        text: 'Edit this page on GitHub',
      },
      lastUpdatedText: 'Last updated',
      footer: {
        message: 'Odyssey documentation · v3.0 (Latest)',
      },
    },
  }),
)
