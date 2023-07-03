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
    else
    {
        console.log('Sorry!!!!  Time Out!!!!')
    }

  });
 </script>  

<!-- <script>
export default {
  data() {
    return {
      foo: null,
    };
  },
  created() {
    const unwatch = this.$watch("foo", (value) => {
      console.log(value);
    });

    setTimeout(() => {
      unwatch();
    }, 5000);
  },
};
</script> -->