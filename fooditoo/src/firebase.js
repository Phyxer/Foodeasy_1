// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDAc2KF17Sql2UHYOmQIFc6YNdoerC6qqQ",
    authDomain: "foodbase-729d5.firebaseapp.com",
    databaseURL: "https://foodbase-729d5-default-rtdb.firebaseio.com",
    projectId: "foodbase-729d5",
    storageBucket: "foodbase-729d5.appspot.com",
    messagingSenderId: "630933155937",
    appId: "1:630933155937:web:c84f75b84265f45790fa20"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the database service
  var database = firebase.database();
  
  // Create a reference to the data location in the database
  var ref = database.ref('path/to/data');
  
  // Attach a listener to the reference
  ref.on('value', function(snapshot) {
    // Retrieve the data from the snapshot
    var data = snapshot.val();
    // Do something with the data
    console.log(data);
  });