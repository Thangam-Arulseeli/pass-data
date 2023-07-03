<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
               <h2>Parent</h2>
               <child_component>
                    <h3 class="child-content">You are my first child</h3>
                    <h4 class="child-content">Your name is Tom</h4>
                </child_component>

               <!-- <child_component>
                    <h3 class="child-content" slot ="title">You are my first child</h3>
                    <h4 class="child-content" slot="message">Your name is Tom</h4>
               </child_component> -->
            </div>
        </div>
    </div>
</template>

<script>
import Child from './SlotChild.vue';
    export default {
        components: {
             child_component: Child,
        }
    }
</script>

<style>
</style>