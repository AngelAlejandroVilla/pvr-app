<template>
  <VDatePicker v-model="range" is-range>
    <template #default="{ inputValue, inputEvents }">
      <div class="flex justify-center items-center">
        <BaseInput :value="inputValue.start" v-on="inputEvents.start" />
        <IconArrowRight />
        <BaseInput :value="inputValue.end" v-on="inputEvents.end" />
      </div>
    </template>
  </VDatePicker>
</template>

<script setup>
import { ref } from "vue";

const range = ref({
  start: new Date(2020, 9, 12),
  end: new Date(2020, 9, 16),
});
</script>
