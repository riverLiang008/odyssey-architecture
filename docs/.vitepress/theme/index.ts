import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import DesignSourceLink from './DesignSourceLink.vue'
import HomeHeroMotion from './HomeHeroMotion.vue'
import 'katex/dist/katex.min.css'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      'doc-before': () => h(DesignSourceLink),
      'home-hero-image': () => h(HomeHeroMotion),
    }),
}
