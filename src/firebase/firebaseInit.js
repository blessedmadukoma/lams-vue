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

// const firebaseConfig = {
//   apiKey: "AIzaSyCjYLqYV9e-DhT8lOS-UzWzEnv_66E4WD0",
//   authDomain: "lams-vue.firebaseapp.com",
//   projectId: "lams-vue",
//   databaseURL: "https://lams-vue-default-rtdb.europe-west1.firebasedatabase.app",
//   storageBucket: "lams-vue.appspot.com",
//   messagingSenderId: "11255647639",
//   appId: "1:11255647639:web:774585f038f54728c4c8d2",
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyCnZIQp7yULHhOWDCqiaiYxOLlyUe8BJdA",
//   authDomain: "lams-bc30c.firebaseapp.com",
//   databaseURL: "https://lams-bc30c-default-rtdb.firebaseio.com",
//   projectId: "lams-bc30c",
//   storageBucket: "lams-bc30c.appspot.com",
//   messagingSenderId: "905971573810",
//   appId: "1:905971573810:web:bef46731d8cd0aa84ac82b",
//   measurementId: "G-3B7ZCQB48N"
// };

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
