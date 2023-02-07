
var firebaseConfig = {
  apiKey: "AIzaSyASbR9YfDOAfmSvUVlu3Zadv2qaVG-u4m0",
  authDomain: "stickchat-1ef6c.firebaseapp.com",
  databaseURL: "https://stickchat-1ef6c-default-rtdb.firebaseio.com",
  projectId: "stickchat-1ef6c",
  storageBucket: "stickchat-1ef6c.appspot.com",
  messagingSenderId: "516132291796",
  appId: "1:516132291796:web:8b2f46a902b01775896741"
};

firebase.initializeApp(firebaseConfig);
    
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    document.getElementById("user_name").innerHTML="Welcome "+ user_name + "!"
    function logout()
    {
      window.location="index.html";
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
    }

    function addRoom()
    {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"Adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html"
    }
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name-" + Room_names);
      row="<div class='room_name' id="+ Room_names +" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML+=row;

      });});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}
