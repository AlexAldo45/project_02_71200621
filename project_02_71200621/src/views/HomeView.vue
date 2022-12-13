<template>
  <div class="app">
    <div class="tengah">
      <input type="text" id="fname" placeholder="Masukkan username" name="fname">
      <br>
      <router-link to="/about"><button id="button" class="button" type="button" v-if="value1" @click="handleShout">Masuk</button></router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: true,
      
    }
  }
};

// function myFunction() {
  
//   let element = document.getElementById("button");
//   let hidden = element.getAttribute("hidden");

//   if (hidden) {
//     element.removeAttribute("hidden");
//   } else {
//     element.setAttribute("hidden", "hidden");
//   }
// }
</script>

<style>
.app {
padding-top: 25%;
display: flexbox;
text-align: center;
align-items: center;
}
.tengah {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
align-items: center;
color: #2c3e50;
}

#fname{
width: 260px;
height: 30px;
border-radius: 5px;
}
#button{
width: 265px;
height: 30px;
border-radius: 5px;
font-weight: bolder;
border-color: rgb(72,92,220);
}
.button{
margin-top: 10px;
background-color: rgb(72,92,220);
color: white;
}

</style>

<!-- <template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script> -->
