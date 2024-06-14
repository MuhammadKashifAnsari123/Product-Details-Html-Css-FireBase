// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword,onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { set, push, ref, onValue, getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";



const firebaseConfig = {
    apiKey: "AIzaSyC_-r5-1dn0ezZ11qIZjf6BV02wMBqWPJI",
    authDomain: "carddetails-90179.firebaseapp.com",
    databaseURL: "https://carddetails-90179-default-rtdb.firebaseio.com",
    projectId: "carddetails-90179",
    storageBucket: "carddetails-90179.appspot.com",
    messagingSenderId: "187635305345",
    appId: "1:187635305345:web:c53649c3c7f9f147c43680",
    measurementId: "G-NR6628W26D"
  };




const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
const auth = getAuth();



var email = document.getElementById('email');
var password = document.getElementById('password');


window.userLogin = function () {
  var obj = {
      email: email.value,
      password: password.value,
  }

  if (!obj.email || !obj.password) {
      Swal.fire({
          title: "All fields are required!",
          text: "Please fill in all fields.",
          icon: "warning"
      });
      return; // Stop the function execution if any field is empty
  }

  email.value = '';
  password.value = '';

  signInWithEmailAndPassword(auth, obj.email, obj.password)
  .then(function (res){
      console.log(res);
      Swal.fire({
          title: "You have logged in successfully!",
          text: "You clicked the button!",
          icon: "success"
      });
  })
  window.location.assign("../form/form.html")
  .catch(function (err){
      console.log(err.message);
      Swal.fire({
          title: "Invalid Email and Password!",
          text: "Please check your credentials.",
          icon: "error"
      });
  });
}


