<template>
    <div>
        <input type="text" ref="inputRef" v-model="inputRef" />
        <p> Input Value : {{ inputRef }} </p>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'
export default{
    name: 'TemplateRefCompo',
    setup(){
        const inputRef = ref('My Data')

        onMounted(() => {
            //  inputRef.value.focus();
          //this.refs.inputRef.focus();
 
        })

        return{
            inputRef
        }
    } ,
    
}
</script>

<style scoped>
</style>