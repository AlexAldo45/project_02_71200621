<template>
  <div class="overlay">
    <nav class="tengah">
      <router-link router-link to="/"></router-link>
    </nav>
  </div>
  <router-view/>
</template>
<style>
  .overlay{
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
</style>
<script>
  // import { initializeApp } from "firebase/app";
  // import { getAnalytics } from "firebase/analytics";

  // const firebaseConfig = {
  //   apiKey: "AIzaSyCjmy4DqtGUwWARr7enwdoaz18ggFL85dM",
  //   authDomain: "vue-chat-app-18c92.firebaseapp.com",
  //   projectId: "vue-chat-app-18c92",
  //   storageBucket: "vue-chat-app-18c92.appspot.com",
  //   messagingSenderId: "534747807152",
  //   appId: "1:534747807152:web:3c28864239862e2d9cea75",
  //   measurementId: "G-YTPDTVLKWM"
  // };


  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
</script>