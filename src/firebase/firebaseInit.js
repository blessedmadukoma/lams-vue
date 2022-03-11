import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjYLqYV9e-DhT8lOS-UzWzEnv_66E4WD0",
  authDomain: "lams-vue.firebaseapp.com",
  projectId: "lams-vue",
  storageBucket: "lams-vue.appspot.com",
  messagingSenderId: "11255647639",
  appId: "1:11255647639:web:774585f038f54728c4c8d2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
