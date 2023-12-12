/**
 * @file Login.js
 * @author Thomas Tran Dang (thomasdang92@gmail.com)
 * @brief This file provides the JavaScript for the Login portion of the web application. 
 * @version 0.1
 * @date 2023-12-10
 * 
 * @copyright Copyright (c) 2023
 * 
 */

//  Imported Firebase Functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyBhFh8-bPKf37j_MCZaJucZ6W17OaumkuY",
    authDomain: "pcdesign-99abf.firebaseapp.com",
    projectId: "pcdesign-99abf",
    storageBucket: "pcdesign-99abf.appspot.com",
    messagingSenderId: "359736132475",
    appId: "1:359736132475:web:04c009de7e4ca4445c33de",
    measurementId: "G-RH6BHMJ91H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
const auth = getAuth(app);


let EmailInput = document.getElementById('emailInput');
let PasswordInput = document.getElementById('passwordInput');
let LoginMenu = document.getElementById('LoginMenu');
let ForgotPassLabel = document.getElementById('forgotpasslabel');


let SignInUser = evt => {
    evt.preventDefault();

    signInWithEmailAndPassword(auth, EmailInput.value, PasswordInput.value)
        .then(async (credentials) => {
            var ref = doc(db, "UserList", credentials.user.uid);
            const docSnap = await getDoc(ref);


            if (docSnap.exists()) {
                console.log(credentials);
                sessionStorage.setItem("user-info", JSON.stringify({
                    firstName: docSnap.data().firstName,
                    lastName: docSnap.data().lastName
                }))
                sessionStorage.setItem("user-creds", JSON.stringify(credentials.user));
                window.location.href = "/account";
            }
            else {
                sessionStorage.clear();
            }

        })
        // Error message (just in case)
        .catch((error) => {
            alert(error.message);
            console.log(error.code);
            console.log(error.message);
        })
}

let ForgotPassword = () => {
    sendPasswordResetEmail(auth, EmailInput.value)
        .then(() => {
            alert("A Password Reset Link has been sent to your email");
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message);
        })
}

LoginMenu.addEventListener('submit', SignInUser);
ForgotPassLabel.addEventListener('click', ForgotPassword);