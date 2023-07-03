<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
               <h2>Child Component</h2>
             
      <slot>This is the default content of child - The passing html tags are rendered here instead of default content </slot>
        
                <h2>  <slot name="title"></slot> </h2>
               <slot name="message"></slot> 
                

                <h2> Before slot</h2>
                <!-- <slot></slot> -->
                <h2> After slot</h2>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>
<style>
 .child-content {
    background-color: blue;
    color: red;
} 

h3{
    background-color: aqua;
}
</style>