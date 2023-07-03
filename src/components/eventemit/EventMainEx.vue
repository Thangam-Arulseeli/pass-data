<template>
   <p> Message: {{ message }}</p>
   <TextInputEx v-model="message" />
</template>
<script>
import TextInputEx from './TextInputEx.vue';
export default{
    components: { TextInputEx },
    data(){
        return{
            message: 'Hai'
        }
    }
}
</script>