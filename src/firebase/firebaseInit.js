import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDR2G0sEHuMvZb0X2sUVl_Fan7SjStfMJU",
  authDomain: "lams-project-vue.firebaseapp.com",
  databaseURL: "https://lams-project-vue-default-rtdb.firebaseio.com",
  projectId: "lams-project-vue",
  storageBucket: "lams-project-vue.appspot.com",
  messagingSenderId: "4800613356",
  appId: "1:4800613356:web:25ef22ccca4cbee27a0ec9",
  measurementId: "G-YRLVYSQ9FQ"
};

firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

const db = firebase.database();

export { timestamp };
export default db;
