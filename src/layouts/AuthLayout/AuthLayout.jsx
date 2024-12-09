import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const AuthLayout = () => {
    return (
        <div className="w-full min-h-screen bg-[#f3f3f3]">
            <div className="max-w-[80%] mx-auto pt-8 space-y-32 pb-32">
                <Navbar></Navbar>
                <section className="w-[70%] mx-auto bg-white">
                    <Outlet></Outlet>            
                </section>
            </div>
        </div>
    );
};

export default AuthLayout;