<template>
<!-- <div class="app">
  <SlotParent> </SlotParent>
</div> -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Concepts</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Vue Concepts
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><router-link to="/"> Home </router-link> </li>
            <li><router-link to="/propsparent">Props</router-link> </li>
            <li><router-link to="/slotparent">Slot</router-link> </li>
            <li><router-link to="/watcher">Watcher</router-link> </li>
            <li><router-link to="/watchercomposition">Watcher-Composition API</router-link> </li>
            <li><router-link to="/tempconverter">Temp Converter-Composition API</router-link> </li>
            <li><router-link to="/countdowntime">Count Down Time </router-link> </li>
            <li><router-link to="/grandparent">Grand Parent </router-link> </li>
            <li><router-link to="/eventmain">Event Emitters </router-link> </li>
            <li><router-link to="/eventmainex">Event Emitters - Pass Data </router-link> </li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Vue Features
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><router-link to="/templaterefs"> Template refs Options API </router-link> </li>
            <li><router-link to="/templaterefscomp"> Template refs Composition API </router-link> </li>
          </ul>  
         </li>

      </ul>
    </div>
  </div>
</nav> 

<h1>App Component</h1> 
  <hr /> 
  <router-view/>
  
</template>

<script>
// import SlotParent from './components/SlotParent.vue';
// export default{
//   components: {
//     SlotParent
//   }
// }
</script>
<style>
 /* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}  */
</style>
