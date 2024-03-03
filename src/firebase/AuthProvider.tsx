import React, { createContext, ReactNode, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
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
};

// Create the AuthContext
export const AuthContext = createContext<AuthContextType>({
  user: null,
  createUserWithEmailAndPass: () => Promise.reject("Not implemented"),
  loading: true,
});

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Creating User
  const createUserWithEmailAndPass = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
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
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
