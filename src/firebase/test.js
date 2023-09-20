import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

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
const firestore = getFirestore(app);
