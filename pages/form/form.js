// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getDatabase, set, ref, push } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// Your web app's Firebase configuration

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



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();



var imgUrl = document.getElementById('imgUrl');
var carName = document.getElementById('carName');
var company = document.getElementById('company');
var price = document.getElementById('price');
var model = document.getElementById('model');



window.addData = function() {
    if(imgUrl.value && carName.value && company.value && price.value && model){
        var obj = {
            imgUrl: imgUrl.value,
            carName: carName.value,
            company: company.value,
            price: price.value,
            model: model.value
        };
     
    
        imgUrl.value = ''
        carName.value = ''
        company.value = ''
        price.value = ''
        model.value = ''
    
        obj.id = push(ref(db, "Details")).key
    
        var reference = ref(db, `Details/${obj.id}`);
        set(reference,obj)
    
        .then(function (){
            console.log("Succesfully");
        })
    
        .catch(function (err) {
            console.log(err.message);
        })
    }
else{
      Swal.fire({
            title: "All field required!",
            // text: "You have successfully signed up!",
            // icon: "success"
        });
}
  
}