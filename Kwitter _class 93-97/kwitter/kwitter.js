var firebaseConfig = {
  apiKey: "AIzaSyAgt2cHgyZ2WwPMM9I-2IZPgXvLtsJ2FBw",
  authDomain: "kwitterdatabase-f6132.firebaseapp.com",
  databaseURL: "https://kwitterdatabase-f6132-default-rtdb.firebaseio.com",
  projectId: "kwitterdatabase-f6132",
  storageBucket: "kwitterdatabase-f6132.appspot.com",
  messagingSenderId: "520788237788",
  appId: "1:520788237788:web:1966dca2dccf50ba2c4319"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);




function addUser() {

  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);
  firebase.database().ref("/").child(user_name).update(
    {
    key:"mesaages"
    }
    );
  
    window.location = "kwitter_room.html";
}

