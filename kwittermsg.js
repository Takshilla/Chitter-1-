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

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send(){
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
        });
        document.getElementById("msg").value = "";
  }

function getData() { 
    firebase.database().ref("/"+room_name).on('value', function(snapshot) { 
          document.getElementById("output").innerHTML = "";
           snapshot.forEach(function(childSnapshot) {
                  childKey  = childSnapshot.key;
                   childData = childSnapshot.val();
                    if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
