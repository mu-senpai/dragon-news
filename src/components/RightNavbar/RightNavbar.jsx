import FindUsOn from "../FindUsOn/FindUsOn";
import LoginWith from "../LoginWith/LoginWith";

const RightNavbar = () => {
    return (
        <div className="space-y-10">
            <LoginWith></LoginWith>
            <FindUsOn></FindUsOn>            
        </div>
    );
};

export default RightNavbar;