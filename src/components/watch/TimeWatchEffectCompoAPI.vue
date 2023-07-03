<template>
    <div class="centered">
      <h1>{{ counter }}</h1>
    </div>
  </template>
  
  <script setup>
  import { ref, watchEffect } from "vue";
  const counter = ref(10);
  
  watchEffect(() => {
    if (counter.value > 5) {
      setTimeout(() => {
        counter.value--;
      }, 1000);
    }
  });
  </script>

  