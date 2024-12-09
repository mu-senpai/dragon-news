import { FaGithub, FaGoogle } from "react-icons/fa6";

const LoginWith = () => {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Login With</h2>
            <div className="flex flex-col gap-3">
                <button className="btn btn-ghost text-base border-[#E7E7E7]">
                    <FaGoogle></FaGoogle> Login with Google
                </button>
                <button className="btn btn-ghost text-base border-[#E7E7E7]">
                    <FaGithub></FaGithub> Login with Github
                </button>
            </div>            
        </div>
    );
};

export default LoginWith;