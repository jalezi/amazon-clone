import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAY08k3NUlgnzrQmiZU87kkwUbgt36FQew',
  authDomain: 'clone-1a0e3.firebaseapp.com',
  databaseURL: 'https://clone-1a0e3.firebaseio.com',
  projectId: 'clone-1a0e3',
  storageBucket: 'clone-1a0e3.appspot.com',
  messagingSenderId: '1095798213618',
  appId: '1:1095798213618:web:51dbab227cddf83f0eb96b',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
