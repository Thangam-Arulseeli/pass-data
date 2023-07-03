<template>
    <div>
        <h5 class="text-danger"> COMPANY : {{ComValue1}} </h5>
           <h3>  My name is  {{firstname}} {{lastname}}  </h3>
             <h4> My age is {{age}} </h4>
             <h4> {{result}} </h4>
             
             <h5> LOCATION : {{ComValue2}} </h5>
             
      </div>
  </template>   
 
 
 <script>
 export default
     { props: ['ComValue1', 'ComValue2'],
     data(){
         return{ 
             
                firstname : 'Arulseeli',
                lastname : 'Churchill',
                age : 20,
                result : 'true'
               
                }
     }
     }
 
     </script>

     <style>
       h5 {
        background-color: azure;
        color: blue;
        text-align: center;
       }
    </style>