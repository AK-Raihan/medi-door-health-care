import { useEffect, useState } from "react"
import initializeFirebase from "../Firebase/firebase.init";
import { getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword } from "firebase/auth";



initializeFirebase()

const useFirebase= ()=>{
    const [user, setUser]= useState({});
    const [error, setError]= useState('');
    const[isloading, setIsLoading]= useState(true);


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle= ()=>{
        signInWithPopup(auth, googleProvider)
        .then((result) => {
          setUser(result.user);
          // console.log(result.user);
          setError("");
        })
        .finally(() => setIsLoading(false));
    }

    // observe
    useEffect(() => {
        const unsubcribed= onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user);
          } else {
            setUser({})
          }
          setIsLoading(false)
        });
        return ()=>unsubcribed;
      }, []);

      const logOut = ()=>{
        setIsLoading(true)
          signOut(auth)
          .then(() => {
            setUser({});
          })
          .finally(() => setIsLoading(false));
      };

      const handleUserRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
          .then((result) => {
            console.log(result.user);
            setUser(result.user);
          })
          .catch((error) => {
            setError(error.message);
          });
      };

      const handleUserLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
          .then((result) => {
            console.log(result.user);
            setUser(result.user);
          })
          .catch((error) => {
            setError(error.message);
          });
      };
    

      return{
          user,
          signInUsingGoogle,
          logOut,
          handleUserRegister,
          handleUserLogin
      }


}


export default useFirebase;
