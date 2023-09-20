import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";

const config = {
  apiKey: "AIzaSyAifGkC4xIWeZP0Yk22Q1LzMII9EpS__Bk",
  authDomain: "crowndb-1f56d.firebaseapp.com",
  projectId: "crowndb-1f56d",
  storageBucket: "crowndb-1f56d.appspot.com",
  messagingSenderId: "114818043182",
  appId: "1:114818043182:web:ba375e2938525cdc9c7ebf",
  measurementId: "G-JTFNVSYWVE",
};

const app = initializeApp(config);

export const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = async () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserProfileDocument = async (
  userAuth,
  additionalData = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "/users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  return userDocRef;
};
export const onAuthStateChangedListener = (cb) => onAuthStateChanged(auth, cb);
