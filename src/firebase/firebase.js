import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDDHkWB7OwyYVcDe7l1JNIzVELAfxwk1aI",
  authDomain: "skill-verification.firebaseapp.com",
  databaseURL: "https://skill-verification-default-rtdb.firebaseio.com",
  projectId: "skill-verification",
  storageBucket: "skill-verification.appspot.com",
  messagingSenderId: "101215879429",
  appId: "1:101215879429:web:abc752c70915545d22f76c",
  measurementId: "G-SJT0E4CSVN"

};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
}

export const db = firebase.firestore();

export default firebase;
