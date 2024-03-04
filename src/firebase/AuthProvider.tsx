import React, { createContext, ReactNode, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  User,
  UserCredential,
} from "firebase/auth";
import { auth } from "./firebase.config";

// Define the type for the authentication context
type AuthContextType = {
  user: User | null;
  createUserWithEmailAndPass: (
    email: string,
    password: string
  ) => Promise<UserCredential>;
  loading: boolean;
  logInUser: (email: string, password: string) => Promise<UserCredential>;
  googleLogin: () => Promise<UserCredential>;
};

// Create the AuthContext
export const AuthContext = createContext<AuthContextType>({
  user: null,
  createUserWithEmailAndPass: () => Promise.reject("Not implemented"),
  loading: true,
  logInUser: () => Promise.reject("Not implimented"),
  googleLogin: () => Promise.reject("Not implimented"),
});

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const googleProvider = new GoogleAuthProvider();

  // Creating User
  const createUserWithEmailAndPass = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Loggin user in with email and pass

  const logInUser = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google Provider

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //   Monitoring USER state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo: AuthContextType = {
    createUserWithEmailAndPass,
    user,
    loading,
    logInUser,
    googleLogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
