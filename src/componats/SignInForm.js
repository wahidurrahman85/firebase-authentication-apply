import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import initializationFirebaseApp from "../firebase/Firebase.initialize";

initializationFirebaseApp();
const googleProvider = new GoogleAuthProvider();

const SignInForm = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      const { displayName, email, photoURL } = result.user;
      const signInInfo = {
        name: displayName,
        email: email,
        photo: photoURL,
      };
      setUser(signInInfo);
    });
  };
  const handleSignOut = () => {
    signOut(auth);
    setUser("");
  };
  return (
    <div className="text-center">
      <h3>Sign In </h3>
      {!user.email ? (
        <Button varient="primary" type="submit" onClick={handleGoogleSignIn}>
          Google Sign In
        </Button>
      ) : (
        <Button varient="primary" type="submit" onClick={handleSignOut}>
          Sign Out
        </Button>
      )}
      {!user.photo ? (
        <div></div>
      ) : (
        <div className="border-2 bg-info rounded  w-25">
          <h4>{user.name}</h4>
          <p>{user.email}</p>
          <img width="100" src={user.photo} alt="user-pic" />
        </div>
      )}
    </div>
  );
};

export default SignInForm;
