// import firebase from "firebase";

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD6QRAb5V3OE9qCcmH_aiguuMcrZv7C3hQ",
//   authDomain: "brighterwash-online.firebaseapp.com",
//   databaseURL: "https://brighterwash-online.firebaseio.com",
//   projectId: "brighterwash-online",
//   storageBucket: "brighterwash-online.appspot.com",
//   messagingSenderId: "474306681631",
//   appId: "1:474306681631:web:5f71fc2fb8e6330d43ee2a",
//   measurementId: "G-6NK8KZK4VN",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// var provider = new firebase.auth.GoogleAuthProvider();
// const auth = firebase.auth();

// export { auth, provider };

// const db = firebaseApp.firestore();
// export default db;

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6QRAb5V3OE9qCcmH_aiguuMcrZv7C3hQ",
  authDomain: "brighterwash-online.firebaseapp.com",
  databaseURL: "https://brighterwash-online.firebaseio.com",
  projectId: "brighterwash-online",
  storageBucket: "brighterwash-online.appspot.com",
  messagingSenderId: "474306681631",
  appId: "1:474306681631:web:5f71fc2fb8e6330d43ee2a",
  measurementId: "G-6NK8KZK4VN",
};


// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

var provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

const db = firebaseApp.firestore();
export default db;