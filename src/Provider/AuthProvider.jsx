import { createUserWithEmailAndPassword } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext } from "react";
import auth from '../Firebase/Firebase.config';


export const AuthContext = createContext(null)




const AuthProvider = ({ children }) => {
    // const [user, setUser] = useState(null);

      // user create
      const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
      }

    const authInfo = {
        // user,
        registerUser
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