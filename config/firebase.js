// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDAdkcZnx1NLlYD9JuKXpeP41v_-F837jg",
    authDomain: "blog-app-2ebf1.firebaseapp.com",
    projectId: "blog-app-2ebf1",
    storageBucket: "blog-app-2ebf1.appspot.com",
    messagingSenderId: "661736541689",
    appId: "1:661736541689:web:f404e9da86c8a74feb0128",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// DataBase
const db = getFirestore(app);
const timestamps = serverTimestamp()

//Auth
const auth = getAuth();


export { db, timestamps, auth}




