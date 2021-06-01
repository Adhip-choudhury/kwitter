function login(){

    var Username= document.getElementById("UserName").value;
    localStorage.setItem("User Name",Username);
    window.location.replace("kwitter_room.html");
}