import { getDatabase, ref, onValue } from "firebase/database";

// Initialize the Firebase app as shown in the given code snippet
const app = initializeApp(firebaseConfig);

// Get a reference to the database
const db = getDatabase(app);

// Set up a listener to retrieve data from a specific node in the database
onValue(ref(db, "path/to/node"), (snapshot) => {
  const data = snapshot.val();
  // Do something with the retrieved data
});
onValue(ref(db, "User"), (snapshot) => {
    const data = snapshot.val();
    const users = Object.values(data);
    const userIDsAndNames = users.map((user) => {
      return { userID: user.User_ID, name: user.NAME };
    });
    // Do something with the retrieved user IDs and names
  });
  onValue(ref(db, "PICKUP_LOC"), (snapshot) => {
    const data = snapshot.val();
    const quantities = Object.values(data).map((item) => item.QUANTITY);
    // Do something with the retrieved quantities
  });
    