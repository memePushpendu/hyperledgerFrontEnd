import firebase from 'firebase/app';
import 'firebase/auth';

const prodConfig = {
    apiKey: "AIzaSyBF-PAwsbHfSwQr1tMUJcyri7EtlsTWjVg",
    authDomain: "fir-project-8680e.firebaseapp.com",
    databaseURL: "https://fir-project-8680e.firebaseio.com",
    projectId: "fir-project-8680e",
    storageBucket: "fir-project-8680e.appspot.com",
    messagingSenderId: "164420330418"
};

if (!firebase.apps.length) {
  firebase.initializeApp(prodConfig);
}

const auth = firebase.auth();

export {
  auth,
};