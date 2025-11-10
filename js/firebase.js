<script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"></script>

const firebaseConfig = {
  apiKey: "AIzaSyAeZBjEdRv5mhwk-UuadpdZkzImKdBNdJs",
  authDomain: "project-nomi-5b550.firebaseapp.com",
  projectId: "project-nomi-5b550",
  storageBucket: "project-nomi-5b550.firebasestorage.app",
  messagingSenderId: "240244825647",
  appId: "1:240244825647:web:5ab6243b4d82b2a2d230da",
  measurementId: "G-4N7WC9YTQM",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

function googleLogin() {
  auth.signInWithPopup(provider)
    .then((result) => console.log(result.user));
    .catch((err) => console.log(err));
}
