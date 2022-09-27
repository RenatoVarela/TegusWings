
import firebase from "firebase/app";
import "firebase/storage";
import "firebase/remote-config";
const firebaseConfig = {
  apiKey: "AIzaSyCvCDkKvCErGmm8z7I_r4LXCSkZMV9ysv0",
    authDomain: "teguswings-3ef44.firebaseapp.com",
    projectId: "teguswings-3ef44",
    storageBucket: "teguswings-3ef44.appspot.com",
    messagingSenderId: "77114897536",
    appId: "1:77114897536:web:c6bb547122733a1219a265",
    measurementId: "G-Z2PN36N1MJ"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
const storage =firebase.storage();
export {storage , firebase as default};