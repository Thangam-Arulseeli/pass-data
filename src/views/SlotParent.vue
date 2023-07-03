<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
               <h2>Parent</h2>
                              
                <!-- <child_component>
                    <h3 class="child-content">You are my first child</h3>
                    <h4 class="child-content">Your name is Tom</h4>
                    <img src="../assets/T-Shirt.jpg" alt="T-Shirt" width="150" height="150"/>
               </child_component>    -->


               <child_component>   <!-- Multilple/ Named slot Example -->  
                  <template v-slot:title> 
                    <h3 class="child-content">You are my first child</h3>
                    <h4 class="child-content">Your name is Tom - Example for slots [Template rendering....]</h4> 
                    <img src="../assets/T-Shirt.jpg" alt="T-Shirt" width="150" height="150"/>
                  </template>
                  <h4> I'm in parent </h4>
                  <h4> I stay here for a while</h4>
                  <template v-slot:message>
                     <h5> My sample message for the second named slot </h5>
                </template>
                </child_component>   

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