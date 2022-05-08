const firebaseConfig = {
    apiKey: "AIzaSyAmhe0unBQkpou9U09jkAgp4zJ8iXWjJ1E",
    authDomain: "letschatwebapp-7a12e.firebaseapp.com",
    projectId: "letschatwebapp-7a12e",
    storageBucket: "letschatwebapp-7a12e.appspot.com",
    messagingSenderId: "730954886084",
    appId: "1:730954886084:web:54a96f27b991a829a59291"
  };

firebase.initializeApp(firebaseConfig);
    
function getData() {
        firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(
        function(childSnapshot) {
            childKey  = childSnapshot.key;
            Room_names = childKey;

            function addUser(){
                user_name= document.getElementById("user_name").value;
                firebase.database().ref("/").child(user_name).update({
                purpose : "adding user"
                });
            }

        });});}
getData();