import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvclp2MQ4xTpUEopF1lrpgSnTjBTZKMKM",
  authDomain: "tiktok-clone-app-ff997.firebaseapp.com",
  projectId: "tiktok-clone-app-ff997",
  storageBucket: "tiktok-clone-app-ff997.appspot.com",
  messagingSenderId: "779955579352",
  appId: "1:779955579352:web:cb6bfc52f89773fee42aad",
  measurementId: "G-3HRM8LS0PE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
