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
import axios from "axios";

FirebaseInit();
const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const auth = getAuth();
  const registerUser = (email, password, name, history, url) => {
    setLoading(true);
    setUser({ email: email, displayName: name });
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        axios.post(
          "http://localhost:5000/adduser",
          {
            email,
            displayName: name,
          },
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("idToken")}`,
            },
          }
        );
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
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        getIdToken(currentUser).then((idToken) => {
          localStorage.setItem("idToken", idToken);
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe;
  });
  useEffect(() => {
    axios
      .get("http://localhost:5000/checkadmin/", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("idToken")}`,
        },
      })
      .then((result) => {
        setAdmin(result.data.admin);
        console.log(admin);
      });
  }, [user]);
  return { registerUser, LogOut, LoginUser, user, authError, loading };
};

export default useFirebase;
