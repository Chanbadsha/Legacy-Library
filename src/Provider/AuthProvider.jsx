import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.init";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create User With Email
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login With EMail and Pass

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Social Login
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSign = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // signOut

  const handleSignOut = () => {
    return signOut(auth);
  };

  //
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unSubscribe();
  }, []);

  const userInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    handleSignOut,
    handleGoogleSign,
    loginUser,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
