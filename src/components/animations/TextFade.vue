<template>
    <button @click="visibleF= !visibleF"> Toggle-Fading </button>
    <h2> Fading the text </h2>
    <transition name="fade"> 
        <p v-if="visibleF">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iure error sunt nulla aliquam! Inventore animi, doloremque at obcaecati assumenda accusamus in veritatis natus cumque, sequi vel distinctio! Neque, hic.
        </p>
    </transition>
<hr />

<button @click="visibleB= !visibleB"> Toggle-bouncing </button>
<h2> Bouncing the text </h2>
<transition name="bounce" mode="out-in"> 
    <p v-if="visibleB">  Hello Welcome!!!!  </p>
    <p v-else> Visit again!!!!!</p>
</transition>
<hr />

<h2> Transition-Group</h2>
<input v-model="text" />
<button @click="addText"> Add Text </button>
<TransitionGroup tag="ul" name="list"> 
<li v-for="(text, ind) in items" :key="text" @click="removeText(ind)"> {{ text }}</li>
</TransitionGroup>
</template>


<script>
import { ref, reactive } from "vue";
export default {
    setup(){
        const visibleF = ref (false);
        const visibleB  = ref (false);

        const text= ref("");
        const items = reactive(["First item", "Second item"])
        const addText = () => {
            items.push(text.value);
            text.value = "";
        }
        const removeText = (ind) => {
            items.splice(ind, 1)
        }
        return { visibleF, visibleB, text, items, addText, removeText};
    }
}
</script>

<style scoped>
 /* Text Fading Style */
.fade-enter-from, 
.fade-leave-to {
    opacity: 0;
}
.fade-enter-active, 
.fade-leave-active {
    transition: opacity 2s ease;
}

/* Text Bouncing Style */
.bounce-enter-active{
    animation: bounce-in 0.5s;
}
.bounce-leave-active {
    animation: bounce-in 0.5s reverse ;
}
@keyframes bounce-in {
    0%{
        transform: scale(0);
    }
    50% {
        transform: scale(1.5);
        }
    100%{
        transform: scale(1);
    }
    }
 
 /* Transition Group Style */
 .list-enter-active,
 .list-leave-active{
    transition: all 0.5s ease;
 }
 .list-enter-from{
    opacity: 0;
    transform: translateX(-30px);
 }
 .list-leave-to{
    opacity: 0;
    transform: translateX(30px);
 }
</style>