<template>
    <div>
        <input type="text" ref="inputRef" v-model="inputRef"/>
    </div>
    <p> Input Value : {{ inputRef }} </p>
</template>

<script>
export default{
    name: 'TemplateRef',
        data(){
            return{
                inputRef: 'Julia'
            }
        },    
    mounted(){
        this.$refs.inputRef.focus();
    },
}
</script>

<style scoped>

</style>