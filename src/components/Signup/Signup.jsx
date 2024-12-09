import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const Signup = () => {

    const {createUser, setUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();

        const form = new FormData(event.target);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        console.log({ name, photo, email, password });

        createUser(email, password)
        .then(result => {
            setUser(result.user);
            alert('User created successfully');
            navigate(`/auth/login`);
        })
        .catch((error) => {
            const errorCode = error.code;
            alert(errorCode);
        });
    }

    return (
        <div className="card bg-base-100 w-full py-20 px-24 shrink-0">
            <form onSubmit={handleRegister} className="card-body">
                <h2 className="text-4xl font-semibold text-center mb-12">Register your account</h2>
                <hr className="w-full mb-12" />
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Your Name</span>
                    </label>
                    <input name="name" type="text" placeholder="Enter your name" className="input bg-[#F3F3F3] rounded-[5px]" required />
                </div>
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Photo URL</span>
                    </label>
                    <input name="photo" type="text" placeholder="Enter your photo url" className="input bg-[#F3F3F3] rounded-[5px]" required />
                </div>
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
                <div className="form-control">
                    <label className="label justify-start gap-3 cursor-pointer">
                        <input type="checkbox" defaultChecked className="checkbox" />
                        <span className="label-text">Accept our terms & condition</span>
                    </label>
                </div>
                <div className="form-control mt-2 mb-6">
                    <button className="btn btn-neutral rounded-[5px]">Sign Up</button>
                </div>
                <p className="text-[#706F6F] font-semibold text-center">Already have an account? <Link className="text-red-600" to={`/auth/login`}>Login</Link></p>
            </form>
        </div>
    );
};

export default Signup;