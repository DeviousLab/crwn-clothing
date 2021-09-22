import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCqb1trG-3VMnJdH4P-WI-SSLt8p3yn_q8",
    authDomain: "crown-db-8fc90.firebaseapp.com",
    projectId: "crown-db-8fc90",
    storageBucket: "crown-db-8fc90.appspot.com",
    messagingSenderId: "220996651185",
    appId: "1:220996651185:web:a326737d41fa27f2317a90"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;