import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBfqnrkqj6-2jUuYM626oFzsbPyerOtGJw',
  authDomain: 'crown-db-73a41.firebaseapp.com',
  projectId: 'crown-db-73a41',
  storageBucket: 'crown-db-73a41.appspot.com',
  messagingSenderId: '762000100569',
  appId: '1:762000100569:web:0a7c52351f10a385e082c8',
  measurementId: 'G-22CS3V5JJ2',
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
