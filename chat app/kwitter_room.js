var firebaseConfig = {
    apiKey: "AIzaSyBSwAanoFS6TKbBva3cV7IJVZXdSYtx3O8",
    authDomain: "kwitter-team.firebaseapp.com",
    databaseURL: "https://kwitter-team-default-rtdb.firebaseio.com",
    projectId: "kwitter-team",
    storageBucket: "kwitter-team.appspot.com",
    messagingSenderId: "302742188257",
    appId: "1:302742188257:web:997d422470a9277f9447a0"
  };
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerhtml="Welcome"+user_name+"!";
function addRoom()
{
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name.).update({
 purpose:"adding room name"   
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room Name-"+Room_names);
    row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
   });});}
   getData();
   function redirectToRoomName(name)
   {
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
   }
