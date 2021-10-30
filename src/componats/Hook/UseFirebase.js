import { useEffect, useState } from "react";
import initializationFirebaseApp from "../../firebase/Firebase.initialize";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

initializationFirebaseApp();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const signInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((erorr) => {
        setError(error.massage);
      });
  };

  const signInUsingGighub = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((erorr) => {
        setError(error.massage);
      });
  };
  const logout = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };
  useEffect(() => {
    onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          setUser(user);
        }
      },
      []
    );
  });
  return {
    user,
    error,
    signInUsingGoogle,
    signInUsingGighub,
    logout,
  };
};
export default useFirebase;
