
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBEQHYf7iu5N3RqeJoBoG8dCufW37wsOt4",
      authDomain: "class-test-bd390.firebaseapp.com",
      projectId: "class-test-bd390",
      storageBucket: "class-test-bd390.appspot.com",
      messagingSenderId: "597823084055",
      appId: "1:597823084055:web:091938af536f871ff16e52"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
