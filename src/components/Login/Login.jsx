import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const Login = () => {

    const {logInUser, setUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogIn = (event) => {
        event.preventDefault();

        const form = new FormData(event.target);
        const email = form.get('email');
        const password = form.get('password');

        logInUser(email, password)
        .then((result) => {
            setUser(result.user);
            navigate(location?.state ? location.state : '/');
        })
        .catch((error) => {
            const errorCode = error.code;
            alert(errorCode);
        });
    }

    return (
        <div className="card bg-base-100 w-full py-20 px-24 shrink-0">
            <form onSubmit={handleLogIn} className="card-body">
                <h2 className="text-4xl font-semibold text-center mb-12">Login your account</h2>
                <hr className="w-full mb-12" />
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Email address</span>
                    </label>
                    <input name="email" type="email" placeholder="Enter your email address" className="input bg-[#F3F3F3] rounded-[5px]" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Password</span>
                    </label>
                    <input name="password" type="password" placeholder="Enter your password" className="input bg-[#F3F3F3] rounded-[5px]" required />
                </div>
                <div className="form-control my-6">
                    <button className="btn btn-neutral rounded-[5px]">Login</button>
                </div>
                <p className="text-[#706F6F] font-semibold text-center">Don't have an account? <Link className="text-red-600" to={`/auth/signup`}>Sign Up</Link></p>
            </form>
        </div>
    );
};

export default Login;