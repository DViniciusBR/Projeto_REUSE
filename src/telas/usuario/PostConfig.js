import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCTMiDAabofhABNfE4CVKTXL3-X9mI9lxY",
  authDomain: "imagens-2022.firebaseapp.com",
  projectId: "imagens-2022",
  storageBucket: "imagens-2022.appspot.com",
  messagingSenderId: "673234316523",
  appId: "1:673234316523:web:44c794d52e7b3209bc22ae",
  measurementId: "G-RFDRNDN6RV"
};


  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export {firebase};