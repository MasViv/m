function addUser()
{
    user_name=document.getElementById("user_name").value;
    firebase.database().res("/").child(user_name).update({
        purpose:"adding user"
    });
}