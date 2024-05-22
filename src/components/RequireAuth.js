import { useLocation, Navigate, Outlet, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    
    return (
        auth?.email ? <Outlet /> : console.log("should not get this ")
    )
}
export default RequireAuth;