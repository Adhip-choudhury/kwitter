//YOUR FIREBASE LINK
  var firebaseConfig = {
    apiKey: "AIzaSyDQ1cYw-h20tyRq4UaCnG2eTyyJQ8Ovf3s",
    authDomain: "social-website-5e3f2.firebaseapp.com",
    databaseURL: "https://social-website-5e3f2-default-rtdb.firebaseio.com",
    projectId: "social-website-5e3f2",
    storageBucket: "social-website-5e3f2.appspot.com",
    messagingSenderId: "210929265320",
    appId: "1:210929265320:web:d204db3e15685ca8aa709d",
    measurementId: "G-BC5SH0LQDM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var UserName=localStorage.getItem("User Name");
  var room_name=localStorage.getItem("Name of the room: ");


  function send(){
        var Message_output=document.getElementById("Message_output").value;
        firebase.database().ref(room_name).push({Name: UserName, message: Message_output, like: 0});
        document.getElementById("Message_output").value="";     
      }


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


function logout(){
      localStorage.removeItem("User Name");
      localStorage.removeItem("Name of the room: ");
      window.location.replace("index.html");
}