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
      .then((result) => {
        const user = result.user;
        console.log("Usuário logado:", user);

        window.location.href = "../../index.html";
      })
      .catch((error) => {
        console.error("Erro no login:", error);
        alert("Erro ao entrar com o Google");
      });
  }

document.addEventListener("DOMContentLoaded", () => {
  const googleBtn = document.getElementById("btn-google");
    if (googleBtn) {
      googleBtn.addEventListener("click", googleLogin);
    }
});