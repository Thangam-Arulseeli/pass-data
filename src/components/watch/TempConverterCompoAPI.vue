<template>
    <div class="centered">
      <div>
        <label for="celsius">Degree in celsius</label>
        <input type="text" v-model="tempCelsius" id="celsius" />
      </div>
      <p style="font-size: 30px; margin: 0; font-weight: 600">=</p>
      <div>
        <label for="fahrenheit">Degree in fahrenheit</label>
        <input type="text" v-model="tempFahrenheit" id="fahrenheit" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from "vue";
  
  const tempCelsius = ref(null);
  const tempFahrenheit = ref(null);
  
  watch(tempCelsius, (newValue) => {
    tempFahrenheit.value = Math.round((newValue * 9) / 5 + 32);
  });
  
  watch(tempFahrenheit, (newValue) => {
    tempCelsius.value = Math.round(((newValue - 32) * 5) / 9);
  });
  </script>
  