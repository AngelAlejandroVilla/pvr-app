<template>
  <div class="carousel mt-5">
    <img :src="currentImage" alt="Slide" class="slide" />
  </div>
</template>

<script lang="ts">
import { ref, computed, onMounted } from "vue";
export default {
  setup() {
    const images = ref([
      "src/assets/images/real/1.jpg",
      "src/assets/images/real/2.jpg",
      "src/assets/images/real/3.jpg",
    ]);

    var currentIndex = ref(0);
    var intervalId = ref(0);
    const intervalDuration = ref(3000);

    const currentImage = computed(() => {
      return images.value[currentIndex.value];
    });

    function startCarousel() {
      intervalId.value = setInterval(() => {
        nextSlide();
      }, intervalDuration.value);
    }

    function nextSlide() {
      currentIndex.value = (currentIndex.value + 1) % images.value.length;
    }

    onMounted(() => {
      startCarousel();
    });

    return {
      currentIndex,
      intervalId,
      intervalDuration,
      currentImage,
    };
  },
};
</script>

<style>
.carousel {
  width: 100%;
  overflow: hidden;
}

.slide {
  width: 100%;
  height: auto;
}
</style>
