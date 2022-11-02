import firebase from 'firebase/compat/app';
import 'firebase/compat/firebase-auth-compat';
import 'firebase/compatfirebase-firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCt2ASBo-LOLHcgVwATnfsChUHAey8xOjs",
    authDomain: "reuse-2022.firebaseapp.com",
    projectId: "reuse-2022",
    storageBucket: "reuse-2022.appspot.com",
    messagingSenderId: "9797876994",
    appId: "1:9797876994:web:05e80cff0e76409220961b",
    measurementId: "G-X6J6K4QSPG"
  };

  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export {firebase};