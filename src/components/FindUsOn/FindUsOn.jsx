import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const FindUsOn = () => {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Find Us On</h2>
            <div className="join flex join-vertical *:bg-transparent *:justify-start">
                <button className="btn join-item">
                    <FaFacebook></FaFacebook> Facebook
                </button>
                <button className="btn join-item">
                    <FaTwitter></FaTwitter> Twitter
                </button>
                <button className="btn join-item">
                    <FaInstagram></FaInstagram> Instagram
                </button>
            </div>            
        </div>
    );
};

export default FindUsOn;