import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import React, { createContext, useState } from "react";
import auth from "../Firebase/firebase.init";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create User With Email
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //
  const unSubscriber = onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    } else {
      console.log("object");
      setUser(null);
      setLoading(false);
    }

    return unSubscriber();
  });

  const userInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
