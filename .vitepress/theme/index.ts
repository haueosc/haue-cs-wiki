import { h, ref } from 'vue'
import type { Theme } from 'vitepress'
import { useData, useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'
//-------------------------------------------------
import { NolebaseEnhancedReadabilitiesMenu, NolebaseEnhancedReadabilitiesScreenMenu } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import { NolebaseHighlightTargetedHeading } from '@nolebase/vitepress-plugin-highlight-targeted-heading/client'
import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client'
import type { Options as NolebaseReadOptions } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import { InjectionKey as NolebaseReadInjectionKey } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import codeblocksFold from 'vitepress-plugin-codeblocks-fold'
//-------------------------------------------------
import './fonts/fonts.css'
import './style.css'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'
import '@nolebase/vitepress-plugin-highlight-targeted-heading/client/style.css'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
import '@nolebase/vitepress-plugin-enhanced-mark/client/style.css'
import 'vitepress-plugin-codeblocks-fold/style/index.css'
//-------------------------------------------------
import Footer from './components/Footer.vue'
import TypedInfo from './components/TypedInfo.vue'
import Main from './components/Main.vue'
import HeroImage from './components/HeroImage.vue'
//-------------------------------------------------
export default {
  extends: DefaultTheme,

  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu),
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
      'layout-top': () => h(NolebaseHighlightTargetedHeading),
      'layout-bottom': () => h(Footer),
      'home-hero-info-after': () => h(TypedInfo),
      'home-hero-image': () => h(HeroImage)
    })
  },

  setup: () => {
    const frontmatter = ref(useData());
    const route = useRoute();
    codeblocksFold({ route, frontmatter }, true, 400);
  },

  enhanceApp({ app }) {
    app.use(NolebaseGitChangelogPlugin);
    app.provide(NolebaseReadInjectionKey, {
      layoutSwitch: {
        defaultMode: 5,
        contentLayoutMaxWidth: {
          defaultMaxWidth: 95
        },
        pageLayoutMaxWidth: {
          defaultMaxWidth: 90
        }
      }
    } as NolebaseReadOptions);
    app.component('MainComponent', Main);
  }
} satisfies Theme