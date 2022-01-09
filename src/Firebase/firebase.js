// const firebase = require("firebase");
// Required for side-effects
import "firebase/firestore";
import firebase from "firebase/app";
// import "firebase/auth";
// import firebase from "firebase";
import "firebase/analytics";
import * as FIREBASE from '../constants';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FIREBASE.FIREBASE_APIKEY,
  authDomain: FIREBASE.FIREABASE_AUTHDOMAIN,
  databaseURL: FIREBASE.FIREABASE_DATABASEURL,
  projectId: FIREBASE.FIREABASE_PROJECTID,
  storageBucket: FIREBASE.FIREABASE_STORAGEBUCKET,
  messagingSenderId: FIREBASE.FIREABASE_MESSAGINGSENDERID,
  appId: FIREBASE.FIREABASE_APPID,
  measurementId: FIREBASE.FIREABASE_MEASUREMENTID
};
const app = firebase.initializeApp(firebaseConfig);
export default app;
// export const auth = app.auth();
export const db =firebase.firestore();
// export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
// export const FacebookProvider = new firebase.auth.FacebookAuthProvider();

// class Firebase {
//   constructor() {
//     app.initializeApp(config);
//     this.auth = app.auth();
//   }
//   // *** Auth API ***
//   doCreateUserWithEmailAndPassword = (email, password) => {
//     console.log("do create user with emaiil & password");
//     this.auth.createUserWithEmailAndPassword(email, password);
//     console.log('created');
//   };
//   doSignInWithEmailAndPassword = (email, password) =>
//     this.auth.signInWithEmailAndPassword(email, password);
//   doSignOut = () => this.auth.signOut();
//   doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);
//   doPasswordUpdate = (password) =>
//     this.auth.currentUser.updatePassword(password);
// }

// export default Firebase;
