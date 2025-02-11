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
import axios from "axios";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalArtifact, setModalArtifact] = useState({});
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  // Create User With Email
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login With EMail and Pass

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Social Login
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSign = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // signOut

  const handleSignOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);

        if (currentUser.email) {
          const user = currentUser.email;
          axios
            .post("https://assginment-11-server-rho.vercel.app/jwt", user, {
              withCredentials: true,
            })
            .then((result) => {
              setLoading(false);
            })
            .catch((error) => {
              setLoading(false);
            });
        }
      } else {
        axios
          .post(
            "https://assginment-11-server-rho.vercel.app/removeJwt",
            {},
            { withCredentials: true }
          )
          .then((result) => {
            setLoading(false);
          })
          .catch((error) => {
            setLoading(false);
          });

        setUser(null);
      }
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
    modalArtifact,
    setModalArtifact,
    isButtonDisabled,
    setIsButtonDisabled,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
