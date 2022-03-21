import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCjYLqYV9e-DhT8lOS-UzWzEnv_66E4WD0",
  authDomain: "lams-vue.firebaseapp.com",
  projectId: "lams-vue",
  storageBucket: "lams-vue.appspot.com",
  messagingSenderId: "11255647639",
  appId: "1:11255647639:web:774585f038f54728c4c8d2",
};

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// let db = firebaseApp.database()
// let userRef = db.ref('users')
// export { timestamp };
// export default {
//   firebase: {
//     users: userRef
//   }
//   // firebaseApp.firestore(),

// };

firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

const db = firebase.database();

export { timestamp };
export default db;
