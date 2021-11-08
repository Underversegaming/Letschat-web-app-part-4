
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

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";    
}

function getData() { 
   firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}


