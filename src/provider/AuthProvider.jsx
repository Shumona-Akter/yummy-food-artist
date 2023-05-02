import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
const [user, setUser] = useState(null)
const [authError, setAuthError] = useState('')
// const [loading, setLoading] = useState(true)
// sign in google
const signInGoogle = () =>{
    return signInWithPopup(auth, provider)
}

// const signup
const signUp = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
    setLoading(true)
}

// const signIn
const signIn = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
    setLoading(true)
}



// observer

useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      setUser(loggedInUser);
    //   setLoading(false)
    });
    return () => {
      unSubscribe();
    };
  }, []);

  // logout
const logOut = ()=>{
    return signOut(auth)
 
 }
    const AuthInfo ={
        user,
        setUser,
        signInGoogle,
        authError,
        setAuthError,
        signUp,
        signIn,
        logOut,
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;