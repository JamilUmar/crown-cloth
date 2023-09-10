import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAifGkC4xIWeZP0Yk22Q1LzMII9EpS__Bk',
  authDomain: 'crowndb-1f56d.firebaseapp.com',
  projectId: 'crowndb-1f56d',
  storageBucket: 'crowndb-1f56d.appspot.com',
  messagingSenderId: '114818043182',
  appId: '1:114818043182:web:ba375e2938525cdc9c7ebf',
  measurementId: 'G-JTFNVSYWVE',
};

const app = initializeApp(config);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, provider);
  } catch (err) {
    console.log(err);
  }
};

export const firestore = getFirestore(app);
