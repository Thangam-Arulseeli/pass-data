<template>
    <p> Component Event Child </p>
     <p><input type="text" v-model="myData" /> </p> 
     <!-- <button @click="$emit('closeChild','Child Component closed!!! Visit Again!!!!!')"> Close Child </button> -->
     <button @click="$emit('closeChild',myData)"> Close Child </button> 
</template>

<script>
export default{
    // emits: ['closeChild',] , // Event name is 'closeChild', pass this event name as argument -- emits[] array
   emits: {   // Emits as object and the event name as function
    closeChild(myData){   // Validating the emit based on the value provided
        if (!myData)
            {  console.log('Get user input and proceed.......')
                return false;
            }
        else if (myData.length <= 5)
            {
                console.log('Length of Input data should be more than 5 characters')
                return false;   
         }
         else
         { 
            return true;
         }
  } ,  
   data(){
         return {myData: ''}
     }
}
}
</script>