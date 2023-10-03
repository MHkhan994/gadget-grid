import { getAuth } from "firebase/auth";
import { app } from "../firebase.config";
import { createContext } from "react";
const auth = getAuth(app)

const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const authInfo = {

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;