import React, { createContext, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import app from '../Firebase/Firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
const [user, setUser] = useState(null)
const [authError, setAuthError] = useState('')
// sign in google
const signInGoogle = () =>{
    return signInWithPopup(auth, provider)
}

// const signup
const signUp = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}
    const AuthInfo ={
        user,
        setUser,
        signInGoogle,
        authError,
        setAuthError,
        signUp
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;