import { signInWithGooglePopup } from "./firebase.js";

document.getElementById("google").addEventListener("click", async () => {
  try {
    const user = await signInWithGooglePopup();
    console.log("Logado", user);
    window.location.href = "../index.html";
  } catch (err) {
    console.log("Erro", err);
  }
});


// import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";

// function SignUpPage() {
//     const [password, setPassword] = useState('');
//     const [showPassword, setShowPassword] = useState(false);

//     const validations = {
//         length: password.length >= 8,
//         uppercase: /[A-Z]/.test(password),
//         lowercase:/[a-z]/.test(password),
//         number: /[0-9]/.test(password),
//         special: /[@!&_]/.test(password),
//     }

//     const PasswordCriterion = ({isValid, text}) => (
//         <li className={`criterion ${isValid ? 'valid' : ''}`}>
//             {isValid ? <FaRegCheckCircle /> : <FaRegTimesCircle />}
//             <span>{text}</span>
//         </li>
//     )
// }