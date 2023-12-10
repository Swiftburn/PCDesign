/**
 * @file Register.js
 * @author Thomas Tran Dang (thomasdang92@gmail.com)
 * @brief This file provides the JavaScript for the Register portion of the web application. 
 * @version 0.1
 * @date 2023-12-10
 * 
 * @copyright Copyright (c) 2023
 * 
 */


//  Imported Firebase Functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

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

let FirstNameInput = document.getElementById('firstNameInput');
let LastNameInput = document.getElementById('lastNameInput');
let EmailInput = document.getElementById('emailInput');
let PasswordInput = document.getElementById('passwordInput');
let RegMenu = document.getElementById('RegMenu');

let RegisterUser = evt => {
    evt.preventDefault();

    createUserWithEmailAndPassword(auth, EmailInput.value, PasswordInput.value)
        .then(async (credentials) => {
            var reference = doc(db, "UserList", credentials.user.uid);
            await setDoc(reference, {
                firstName: FirstNameInput.value,
                lastName: LastNameInput.value
            })
            window.location.href = "/login";
            console.log(credentials);
        })
        // Error message (just in case)
        .catch((error) => {
            alert(error.message);
            console.log(error.code);
            console.log(error.message);
        })
}

RegMenu.addEventListener('submit', RegisterUser)
