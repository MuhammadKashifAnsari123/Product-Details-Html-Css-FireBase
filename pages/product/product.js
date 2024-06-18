// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getDatabase, ref, set, onValue, } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

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


var showProduct = document.getElementById('showProduct');

var carsDetails;

function getData() {
    var reference = ref(db, "Details/");
    onValue(reference, function (dt) {
        carsDetails = dt.val();
        var arr = Object.values(carsDetails);
        // Clear previous content
        showProduct.innerHTML = '';

        for(var i = 0; i < arr.length; i++){
            showProduct.innerHTML += `
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card h-100">
                        <img src="${arr[i].imgUrl}" class="card-img-top img-fluid" alt="${arr[i].carName}">
                        <div class="card-body">
                            <h5 class="card-title">${arr[i].carName}</h5>
                            <p class="card-text"><strong>Company:</strong> ${arr[i].company}</p>
                            <p class="card-text"><strong>Price:</strong> ${arr[i].price}</p>
                            <p class="card-text"><strong>Model:</strong> ${arr[i].model}</p>
                        </div>
                    </div>
                </div>
            `;
        }
    });
}
getData();

