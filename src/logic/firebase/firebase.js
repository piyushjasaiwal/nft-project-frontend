// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOkbC-TwAehNUPVkoRiMkb--sq7WoqrzU",
  authDomain: "competetionsdatabase.firebaseapp.com",
  databaseURL: "https://competetionsdatabase-default-rtdb.firebaseio.com",
  projectId: "competetionsdatabase",
  storageBucket: "competetionsdatabase.appspot.com",
  messagingSenderId: "171536687045",
  appId: "1:171536687045:web:339dcf75b3af444f8235ac"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database(app);


export default db;