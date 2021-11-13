import { useEffect, useState } from "react";
import FirebaseInit from "../firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  getIdToken,
  updateProfile,
} from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import axios from "axios";

FirebaseInit();
const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState("");
  const auth = getAuth();
  const storage = getStorage();
  const registerUser = (email, password, name, history, url) => {
    setLoading(true);
    setUser({ email: email, displayName: name });
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        saveUserToDb(email, name);
        setAuthError(null);
        // update user porfile with name
        updateProfile(auth.currentUser, {
          displayName: name,
        }).then(() => {
          setUser(result.user);
        });
        history.push(url);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setAuthError(errorMessage);
        // .
      })
      .finally(() => setLoading(false));
  };
  const LoginUser = (email, password, history, url) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        history.push(url);
        setAuthError(null);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setAuthError(errorMessage);
        // .
      })
      .finally(() => setLoading(false));
  };
  const LogOut = () => {
    signOut(auth).then(() => {
      setUser(null);
    });
  };
  const saveUserToDb = (email, displayName) => {
    const newuser = { email, displayName };
    fetch("https://pacific-savannah-45002.herokuapp.com/adduser", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newuser),
    });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        getIdToken(currentUser).then((idToken) => {
          setToken(idToken);
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/getAdmin/${user?.email}`)
      .then((result) => {
        setAdmin(result.data.admin);
      });
  }, [user, admin]);
  return {
    registerUser,
    LogOut,
    LoginUser,
    user,
    authError,
    admin,
    token,
    loading,
    storage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
  };
};

export default useFirebase;
