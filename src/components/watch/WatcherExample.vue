<template> 
<div>
    <h2> Volume Tracker (0-20)  </h2>
    <h3> Watcher Concept </h3>
    <div>
        <button @click="volume += 2"> + </button>
        <h3> Current Volume : {{ volume }}</h3>
        <button @click="volume -= 2"> - </button>
    </div>
        <hr />
    <div>
    <h3> Computed VS Watchers </h3>
        <div> <label> First Name : </label> <input type="text" v-model="firstName" /> </div>
        <div><label> Last Name : </label> <input type="text" v-model="lastName" /> </div>
         <div><label> Full Name : </label> {{ fullName }}  </div> 
    </div>
    <hr />
    <div>
        Movie: <input type="text" v-model="movie" /> <br />
       Movie Information: <br />
        Movie Title: <input type="text" v-model="movieInfo.title" /> <br />
        Movie Actor: <input type="text" v-model="movieInfo.actor" /> <br />
         <!-- Add Movie: <button @click="movieList.push('Sathya')"> Add New Movie </button>  // Can be used with deep detail    -->
         Add Movie: <button @click="movieList = movieList.concat(['Arambam','Veeram'])" > Add New Movie - concat() </button> <!-- Add New Movie </button>   Used without deep detail -->      
    </div>
</div>
</template>

<script>
export default{
    name: "WatcherExample",
    data(){
        return {
            volume: 0,
            firstName: 'aaaa',
            lastName: '',
            fullName: '',
            movie: '',
            movieInfo:{
                title: '',
                actor: ''
            },
            movieList: ['Ponniyen Selvan', 'Vikram', 'Anandam']
        }
    },
        methods: {},
        // computed: {
        //     fullName(){
        //      return `${this.firstName} ${this.lastName}`
        //     }
      // },
        watch: { 
            volume(newValue, oldValue ){
                if ((newValue >= 16 && newValue < 20)  && (newValue > oldValue)){
                    alert("Listening to high volume for a long time may damage your hearing!!!!");
                }else if (newValue >= 20){
                    //this.volume=20
                    newValue=20
                    this.volume=20
                    alert ("You can't increase the volume more than 20 !!!!")
                }
                else if ((newValue <= 0 && oldValue <=0) || (newValue===0)) {
                    newValue=0;
                    this.volume = 0
                    alert ("You are in mute!!!!")
                }
                   
                },
           
            firstName(value){
                this.fullName = value + '  ' + this.lastName
            },
            lastName(value){
                this.fullName = this.firstName + '  '  + value
            },


            //  movie(newValue){  // Printing the movie name char by char in console
            //     console.log(`Calling API with movie name = ${newValue}`)
            // }, 
            movie: {
                handler(newValue) {  // To run the handler function when the page is loaded
                    console.log(`Calling API with movie name = ${newValue}`)
                },
                immediate: true,   // To call the watch when the page is loaded
            },
            movieInfo:{
                handler(newValue){
                    console.log(`Calling API with Movie object - Movie Title = ${newValue.title}  and  actor = ${newValue.actor}`)
                },
                deep: true  // To watch the object of values and calls API 
            },
            movieList: {
                handler(newValue){
                    console.log(`Updated List ${newValue}`)
                },
               //  deep: true  // Required with array push, not with array concat
            }
        }
    }
    

</script>