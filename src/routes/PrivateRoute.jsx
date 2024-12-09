import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading/Loading";

const PrivateRoute = (props = {}) => {

    const {children} = props || {};

    const {user, loading} = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return <Loading></Loading>;
    } else {
        if (user && user.email) {
            return children;
        }
    }

    return (
        <Navigate state={location.pathname} to={`/auth/login`}></Navigate>
    );
};

export default PrivateRoute;