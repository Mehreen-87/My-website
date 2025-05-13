const firebaseConfig = {
    apiKey: "AIzaSyCU4785EIRp_w6sGvw8xdQcckJPgh9pB2g",
    authDomain: "clientform-9976d.firebaseapp.com",
    databaseURL: "https://clientform-9976d-default-rtdb.firebaseio.com",
    projectId: "clientform-9976d",
    storageBucket: "clientform-9976d.firebasestorage.app",
    messagingSenderId: "183763239548",
    appId: "1:183763239548:web:12ea28bad894b4d82bfff9"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);



function contact(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var obj =  {
        name,
        message,
        email
    }

    console.log(obj);

    firebase.database().ref('userResponse').push(obj)

    name.value = ""
    email.value = ""
    message.value = ""
    
}