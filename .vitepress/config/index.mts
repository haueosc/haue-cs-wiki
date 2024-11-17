import { defineConfig } from 'vitepress'
import { zh, search as zhSearch } from './zh'
import { qqIcon } from '../theme/icons/svg-path'
import footnote from 'markdown-it-footnote'
import { GitChangelog, GitChangelogMarkdownSection } from '@nolebase/vitepress-plugin-git-changelog/vite'

export default defineConfig({
  outDir: 'dist',
  srcDir: 'docs',
  lastUpdated: true,
  ignoreDeadLinks: true,
  locales: {
    root: { label: "简体中文", ...zh }
  },

  themeConfig: {
    logo: '/logo/favicon.png',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/haueosc/haue-cs-wiki' },
      { icon: { svg: qqIcon }, link: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=Zm8MUF5_X_NttegYnhdv9eeYxv2iC7sn&authKey=rwPlDN5zUbwU8WzOSvv%2FR3u8wwgS2yu7DAvFAq%2BMRATIglis8SNHg3%2FCLhW%2Bpi8I&noverify=0&group_code=907625834' }
    ],

    search: {
      provider: 'local',
      options: {
        locales: { ...zhSearch }
      }
    },
  },

  markdown: {
    math: true,
    lineNumbers: true,
    image: {
      lazyLoading: true
    },
    config: (md) => {
      md.use(footnote)
    }
  },

  vite: {
    plugins: [
      GitChangelog({
        repoURL: () => 'https://github.com/haueosc/haue-cs-wiki',
      }),
      GitChangelogMarkdownSection({
        exclude: (id) => id.slice(-9) === 'index.md',
        sections: {
          disableContributors: true,
        },
      }),
    ],

    optimizeDeps: {
      exclude: [
        '@nolebase/vitepress-plugin-enhanced-readabilities/client',
      ],
    },

    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/vitepress-plugin-highlight-targeted-heading',
        '@nolebase/ui'
      ],
    },
  },

  head: [
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.loli.net' }
    ],
    [
      'link',
      { rel: 'preconnect', href: 'https://gstatic.loli.net', crossorigin: '' }
    ],
    [
      'link',
      { href: 'https://fonts.loli.net/css2?family=Noto+Sans+SC:wght@400..900&display=swap', rel: 'stylesheet' }
    ],
    [
      'link',
      { href: 'https://fonts.loli.net/css2?family=Fira+Code:wght@500&display=swap', rel: 'stylesheet' }
    ],
    [
      'link',
      { rel: 'icon', href: '/logo/favicon.png' }
    ],
  ]
})