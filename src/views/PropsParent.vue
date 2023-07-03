
<template>
     <PropsChild  
        ComValue1="CG-VAK"  ComValue2="Coimbatore">
    </PropsChild> 

   <!-- <PropsChild 
     v-bind:ComValue1="CG-VAK" 
    v-bind:ComValue2="Coimbatore"> 
  </PropsChild>  -->

  
</template> 

<script>
import PropsChild from './PropsChild.vue';
export default{
    components: { PropsChild }
}
</script>