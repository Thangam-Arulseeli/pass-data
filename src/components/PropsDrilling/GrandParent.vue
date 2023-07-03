<template>
    <h2> Grand Parent </h2>
    <pre> ***** Props Drilling 
         *** provide & inject
         * The provide & inject APIs allow us to pass data directly to components down in the tree.
         * provide & inject can be used us a simple state management solution (Simple alternative to Vuex-State management)
                App root
                   | 
                Component-A 
                   |
                Component-B 
                   |
                Component-C 
            *** provide & inject are used to improve the performance and pass the data from one component to other component in the tree.
    </pre>
    <hr />
    GrandParent Component - User Name:: {{ username }} & mailID::  {{ mailid }} 
    <hr />
    <ChildProvide />
    <hr />        

</template>

<script>
import ChildProvide from '../PropsDrilling/ChildProvide.vue'
export default {
     data(){
        return{ // Want to set this component's data to the child componrnts using provide 
             username: 'sample',
             mailid: 'sample@gmail.com'
         }
    },
    components: {
        ChildProvide
    },
    //  provide: { //Example:1 -- Want to pass the data down the child components
    //     username: 'SeeliSeelan',
    //      mailid: 'seeliseelan@gmail.com'
    //  }
     provide() { //Example:2 -- Want to set this component's data to the child components    
          return { 
          username: this.username,
          mailid: this.mailid
          }
     }
    }
</script>
<!-- <script setup>
// Example-1: Using <script setup> passing data to deep child using provide
    import { provide } from 'vue'
    import OwnChild from '../PropsDrilling/GrandParent.vue'
    provide(/* key */ 'message', /* value */ 'Welcome to Props Drilling!!!!!')
</script> -->


<!-- <script>
// Example-2: Using setup() passing data to deep child using provide
import { provide } from 'vue'

export default {
  setup() {
    provide(/* key */ 'message', /* value */ 'Welcome to Props drilling - setup()!')
  }
}
</script> -->