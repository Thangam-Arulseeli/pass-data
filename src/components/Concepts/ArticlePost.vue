<template>
 <div v-if="errMsg"> {{ errMsg }} </div>
    <suspense>
    <template #default>
        <ArticleInfo />
    </template>

    <template #fallback>
        Loading Article....
    </template>
</suspense>

</template>

<script>
import ArticleInfo from './ArticleInfo.vue'
import { ref, onErrorCaptured } from 'vue'
export default{
    components: {
        ArticleInfo
    },
    setup(){
        const errMsg = ref(null);
        onErrorCaptured(() => {
            errMsg.value = "Something Went Wrong"
        })
        return { errMsg }
    }

}
</script>