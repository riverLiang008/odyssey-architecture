<script setup lang="ts">
import { onMounted, ref } from 'vue'

const motionEnabled = ref(false)
const videoFailed = ref(false)

onMounted(() => {
  motionEnabled.value = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
})
</script>

<template>
  <div
    class="odyssey-hero-mark"
    role="img"
    aria-label="The Odyssey mark evolving into its final form"
  >
    <video
      v-if="motionEnabled && !videoFailed"
      class="odyssey-hero-mark__motion"
      autoplay
      muted
      playsinline
      preload="auto"
      poster="/images/brand/odyssey-mark-v6.svg"
      @error="videoFailed = true"
    >
      <source src="/media/odyssey-mark-motion.mp4" type="video/mp4">
    </video>
    <img
      v-else
      class="odyssey-hero-mark__fallback"
      src="/images/brand/odyssey-mark-v6.svg"
      alt=""
    >
  </div>
</template>
