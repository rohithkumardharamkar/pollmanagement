import { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { checkvalidate } from "../utils/validate";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import firebase from 'firebase/app';
import {  updateProfile } from "firebase/auth";

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

const app = initializeApp(firebaseConfig);

function Reg()
{
    let t1=useRef(null);
    let t2=useRef(null);
    let t3=useRef(null);
    let n=useNavigate();
    let [err,setErr]=useState(null);
    function fun()
    {
        let c=checkvalidate(t2.current.value,t3.current.value)
        console.log(t2.current.value,t3.current.value);
        
        const auth = getAuth(app);

        createUserWithEmailAndPassword(auth, t2.current.value, t3.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          updateProfile(auth.currentUser, {
            displayName: t1.current.value
          }).then(() => {
           
          }).catch((error) => {
           
          });
          n("/admin")
          
        })
        .catch((error) => {
      
          console.log( error.message);
          setErr( error.message)
          
        });
      
        
     
    }
    
    return(<div className="ct">
        <div className="container">
         <h2>Admin Registration</h2>
        <input type="text" placeholder="Enter name of the Election"  ref={t1}/>
        <input type="text" placeholder="Enter email-id" ref={t2}/>
        <input type="password" placeholder="Enter Officer Id" ref={t3}/>
        <div>{err}</div>
        <button onClick={fun}>Login</button>
        <Link to='/admin'>Admin Login</Link>
    </div>
    </div>)
}
export default Reg