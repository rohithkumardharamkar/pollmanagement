import { Link, useNavigate } from "react-router-dom"
import { useRef, useState } from "react"
import { checkvalidate } from "../utils/validate";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import 'firebase/auth';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyChJonsFwfcSyYY3Mplsa2jxJ3fmID0hlE",
  authDomain: "voting-89e4d.firebaseapp.com",
  projectId: "voting-89e4d",
  storageBucket: "voting-89e4d.firebasestorage.app",
  messagingSenderId: "62135369583",
  appId: "1:62135369583:web:48fe06ffa05e6b6430329a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
function Admin()
{ let t1=useRef(null);
    let t2=useRef(null);
    let t3=useRef(null);
    let nav=useNavigate()
    let [err,setErr]=useState(null);
    function fun()
    {
        let c=checkvalidate(t2.current.value,t3.current.value);
        console.log(c);
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, t2.current.value, t3.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    nav("/ahome")
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErr(errorMessage)
  });
        
        
    }
    
    return(<div className="ct">
        <div className="container">
         <h2>Admin Login</h2>
        <input type="text" placeholder="Enter name of the Election"  ref={t1}/>
        <input type="text" placeholder="Enter email-id" ref={t2}/>
        <input type="password" placeholder="Enter Officer Id" ref={t3}/>
        <div>{err}</div>
        <button onClick={fun}>Login</button>
        <Link to='/reg'>Admin Registration</Link>

    </div>
    </div>)

}
export default Admin