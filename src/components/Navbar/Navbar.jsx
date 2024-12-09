import { Link, NavLink } from "react-router-dom";
import Profie from "../../assets/pictures/user.png"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const Navbar = () => {

    const {user, logOutUser, setUser} = useContext(AuthContext);

    const handleLogOut = () => {
        logOutUser()
        .then(() => {
            setUser(null);
        })
    }

    return (
        <div className="w-full flex items-center justify-between">
            <div className="min-w-40">{user && user.email}</div>
            <div className="flex items-center gap-4 text-[#706F6F]">
                <NavLink className={`hover:underline`} to={`/`}>Home</NavLink>
                <NavLink className={`hover:underline`} to={`/about`}>About</NavLink>
                <NavLink className={`hover:underline`} to={`/career`}>Career</NavLink>
            </div>
            <div className="flex items-center gap-3">
                <img className="rounded-full" src={Profie} alt="" />
                {
                    user ? <button onClick={logOutUser} className="btn px-10 py-1 bg-black text-white rounded-none">Logout</button>
                    : <Link className="btn px-10 py-1 bg-black text-white rounded-none" to={`/auth/login`}>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;