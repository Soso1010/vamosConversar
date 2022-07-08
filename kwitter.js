const firebaseConfig = {
  apiKey: "AIzaSyDSl5u7Y7jJ9BDwmfrumP6WbSdZWPqOPgo",
  authDomain: "vamosconversar-da329.firebaseapp.com",
  projectId: "vamosconversar-da329",
  storageBucket: "vamosconversar-da329.appspot.com",
  messagingSenderId: "660925630291",
  appId: "1:660925630291:web:53e15ad5a1aa13b1e783a6"
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function addUser() {

  userName = document.getElementById("userName").value;

  localStorage.setItem("userName", userName);
  
    window.location = "kwitterRoom.html";
}

