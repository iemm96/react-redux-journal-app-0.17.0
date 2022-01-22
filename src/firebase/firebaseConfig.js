import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {

    apiKey: "AIzaSyBM_KKLIucu4JXDJDWTTN1Pr9BoYUjKSfs",
  
    authDomain: "react-apps-cursos-94bec.firebaseapp.com",
  
    projectId: "react-apps-cursos-94bec",
  
    storageBucket: "react-apps-cursos-94bec.appspot.com",
  
    messagingSenderId: "362549447865",
  
    appId: "1:362549447865:web:ba9a0d11a567350775df68"
  
};

firebase.initializeApp( firebaseConfig );

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}