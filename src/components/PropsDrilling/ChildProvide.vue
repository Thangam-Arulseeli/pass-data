<template>
    <h3> Child Component  </h3>
    <p> User Name: {{ username }}</p>
    <hr />
    <GrandChild />
    <hr />
</template>
<script>
import GrandChild from '../PropsDrilling/GrandChild.vue'
export default {
    components: {
        GrandChild
    },
    inject: ['username']

//   data() {
//     return {
//       message: 'Hello!'
//     }
//   },
//   provide() {
//     // use function syntax so that we can access `this`
//     return {
//       msg: this.message
//     }
//   }
}
</script>