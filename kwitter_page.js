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
    room_name=localStorage.getItem("room_name");
    user_name=localStorage.getItem("user_name");

    function logout()
    {
      window.location="index.html";
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      } });  }); }
getData();

function send()
{
      document.getElementById("output").innerText=user_name
     msg=document.getElementById("msg").value;
     firebase.database().ref(room_name).push({
           name:user_name,
           message:msg,
           like:0
   });
      document.getElementById("msg").value=msg;
}

