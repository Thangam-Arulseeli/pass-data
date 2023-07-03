<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
               <h2>Child Component</h2>
               <slot></slot>
               <!-- <slot name="title"></slot>
               <slot name="message"></slot> -->
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