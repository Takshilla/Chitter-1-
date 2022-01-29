const firebaseConfig = {
    apiKey: "AIzaSyB9O_VbJhTWYv4z5wLpJJbfGIpyrA7Y4ck",
    authDomain: "kwitter-1117f.firebaseapp.com",
    databaseURL: "https://kwitter-1117f-default-rtdb.firebaseio.com",
    projectId: "kwitter-1117f",
    storageBucket: "kwitter-1117f.appspot.com",
    messagingSenderId: "53725841361",
    appId: "1:53725841361:web:a8a33d60f6da7d6cf542f0"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name;

function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"Adding Room Name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}
function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function(childSnapshot) 
    {
          childKey  = childSnapshot.key;
     Room_names = childKey;
    row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML += row;
    
    //End code
    });
   });
  }
getData();
function redirectToRoomName(name){
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}