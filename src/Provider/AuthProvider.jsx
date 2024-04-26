import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from '../Firebase/Firebase.config';

export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [reload, setReload] = useState(false);
    
    // user create
    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
      }
    
    // update user data
    const updateUserProfile = (name, photo, email) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName : name,
            email : email,
            photoURL : photo
        })
        .then(()=>{
            console.log('account create successfully');
        })
        .catch((error)=>{
            console.log(error.message);
            // alert("Somthing wrong please check console.")
        })
    }

    // user login
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Logout
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    // user state checking
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentuser => {
            setUser(currentuser)
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    },[reload])

    // context api data senter
    const authInfo = {
        user,
        registerUser,
        loginUser,
        logout,
        updateUserProfile,
        loading,
        setReload,
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}


export default AuthProvider;