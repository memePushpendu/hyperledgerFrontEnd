import { auth } from './firebase';


// Sign Up
export const doCreateUserWithEmailAndPassword = ( email, password) =>{
  return auth.createUserWithEmailAndPassword(email, password);
}
// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>{
    return auth.signInWithEmailAndPassword(email, password);
}

// Sign out
export const doSignOut = () =>{
    return auth.signOut();
}

  