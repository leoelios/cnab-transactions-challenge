import { Navigate } from "react-router-dom"
import useAuth from "../hooks/auth-hook"

export default () => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated() ? <h1>Authenticated</h1> : <Navigate to='/login' />
}