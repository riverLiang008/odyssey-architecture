<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter, lang } = useData()

const label = computed(() =>
  lang.value.toLowerCase().startsWith('zh') ? '在 Figma 中查看设计 ↗' : 'View in Figma ↗',
)
</script>

<template>
  <div v-if="frontmatter.figma" class="design-source-link">
    <a :href="frontmatter.figma" target="_blank" rel="noreferrer">{{ label }}</a>
  </div>
</template>
