<template>
    <h2> Component Event </h2>
    <h3> Parent Component </h3>
    <pre>
        Component Events [emits & $emit ] – Pass the data and event from child to parent  (and close child component and pass data while closing ) 
        o	 Three steps
        1.	Child - Define the event in the  child component using emits array
        2.	Child - Emit the event with the special $emit() instance method in the child
        3.	Parent - Parent component handles the event during the child component instance is created & emitted the event
    </pre>
    <button @click="isEventChildOpen=true"> Open Child </button>
  <!-- <EventChild v-if="isEventChildOpen" @closeChild="isEventChildOpen=false"/> // To close the child component-->
        <EventChild v-if="isEventChildOpen" @closeChild="closeChildFn" /> <!-- To Pass the data when closing -->
    <p> {{ message }}</p>
</template>
<script>
import EventChild from './EventChild.vue';
export default{
    components: {
        EventChild
    },
    data(){
        return{
            isEventChildOpen: false,
            message: ''
        }
    },
    methods: {
        closeChildFn(value){
            this.isEventChildOpen=false
           this.message = value
        }
    }
}

// import { defineAsyncComponent } from “vue”;
//     const HelloWorld = defineAsyncComponent(()                                       =>import(“./components/HelloWorld.vue”));
//     export default 
//        {name: “App”,
//        components: {HelloWorld,}};

</script>