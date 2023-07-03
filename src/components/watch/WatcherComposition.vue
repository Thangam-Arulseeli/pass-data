  <!-- <template>
     <div>   Example 1  
    <label> Message : </label> 
    <input type="text" v-model="message" />
    {{ message }}
  </div>  

     <div>   Example 2  
    <label> Array Of Object </label> 
    <input type="text" v-model="someData.id[0]" /> <input type="text" v-model="someData.name[0]" />
  </div>    


 </template>    -->


 <!-- <script setup>
// Simple watch in composition API  -- Example 1
import { ref, watch } from "vue";
const message = ref("Hello Vue!");

watch(message, (newValue, oldValue) => {
  // do something with newValue and oldValue.
  console.log(oldValue + '    ' + newValue);
});
</script>  -->

 <!-- <script >
// Watch with deep in composition API
import { ref, watch } from "vue";

const someData = ref([
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Jane",
  },
]);

watch(someData, (newValue, oldValue) => {
   // console.log("SomeData : --- Id : " + someData.id + "  Name : " + someData.name.value);
   console.log(oldValue)
   console.log(newValue)
  },
  {
    deep: true,
  }
);
</script> -->

<!--
<script setup>
// Watch with immediate in Composition API
import { ref, watch } from "vue";
const message = ref("Hello Vue!");

watch(
  message,
  (newValue) => {
    console.log(newValue);
  },
  {
    immediate: true,
  }
);
</script>
-->

 <template>
  <div>
     <input type="text" v-model="message" />
     <p v-if="typing">Typing...</p>
   </div> 
</template>

<script setup>
// watchEffect in Compoistion API
/* the Composition API introduces a new watchEffect() method that is quite similar to watch() with the immediate option
 set to true. However, while the watch function/option just tracks the explicitly monitored source,
watchEffect() will automatically track every reactive property accessed throughout its execution:
*/
import { ref, watchEffect, watch } from "vue";
const foo = ref("Hello world!");
const bar = ref("Hello again!");

const message = ref("");
  const typing = ref(false);
  
  watch(message, (value) => {
    typing.value = true;
    console.log(value);
    setTimeout(() => {
      typing.value = false;
    }, 2000);
  });

watchEffect(() => {
  console.log(foo.value);
  console.log(bar.value);
});
</script>


  
  
  
