
//ADD YOUR FIREBASE LINKS HERE
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


    function logout(){
          localStorage.removeItem("Name of the room: ");
          localStorage.removeItem("User Name");
          window.location.replace("index.html");
    }


    var UserName = localStorage.getItem("User Name");
    document.getElementById("user name").innerHTML="Welcome "+UserName+"!";
      
 
function getData(){
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room name: "+Room_names);
       var row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function addroom(){
      var name_of_room=document.getElementById("roomnaem").value;
      firebase.database().ref("/").child(name_of_room).update({purpose: "Add rome name"});
      localStorage.setItem("Name of the room: ",name_of_room);
      window.location.replace("kwitter_page.html");
}

function redirecttoroomname(room_name){
   console.log(room_name);
   localStorage.setItem("Name of the room: ",room_name);
  window.location.replace("kwitter_page.html");

}