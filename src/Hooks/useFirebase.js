import { useEffect, useState } from "react"
import initializeFirebase from "../Firebase/firebase.init";
import { getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut } from "firebase/auth";





const useFirebase= ()=>{
    initializeFirebase()
    const [user, setUser]= useState({})
    const [error, setError]= useState('')


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()

    const signInUsingGoogle= ()=>{
        signInWithPopup(auth, googleProvider)
        .then((result) => {
          setUser(result.user);
          // console.log(result.user);
          setError("");
        })
        .catch((error) => setError(error.message));
    }

    // observe
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user);
            const uid = user.uid;
          } else {
            // User is signed out
            // ...
          }
        });
      }, []);

      const logOut = ()=>{
          signOut(auth)
          .then(() => {
            setUser({});
          })
          .catch((error) => {
            setError(error);
          });
      }
    

      return{
          user,
          signInUsingGoogle,
          logOut
      }


}


export default useFirebase;
