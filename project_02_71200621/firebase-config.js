const config = {
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyCjmy4DqtGUwWARr7enwdoaz18ggFL85dM",
    authDomain: "vue-chat-app-18c92.firebaseapp.com",
    projectId: "vue-chat-app-18c92",
    storageBucket: "vue-chat-app-18c92.appspot.com",
    messagingSenderId: "534747807152",
    appId: "1:534747807152:web:3c28864239862e2d9cea75",
    measurementId: "G-YTPDTVLKWM"

  };
  
  export function getFirebaseConfig() {
    if (!config || !config.apiKey) {
      throw new Error('No Firebase configuration object provided.' + '\n' +
      'Add your web app\'s configuration object to firebase-config.js');
    } else {
      return config;
    }
  }