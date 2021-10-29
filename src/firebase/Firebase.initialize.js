import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializationFirebaseApp = () => {
  initializeApp(firebaseConfig);
};

export default initializationFirebaseApp;
