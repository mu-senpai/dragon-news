import moment from "moment";
import Logo from "../../assets/pictures/logo.png"

const Header = () => {
    return (
        <div className="flex flex-col items-center gap-3">
            <img src={Logo} className="w-[29.5rem]" alt="" />
            <p className="text-lg text-[#706F6F]">Journalism Without Fear or Favour</p>
            <p className="text-xl text-[#706F6F] font-medium">{moment().format('dddd, MMMM Do, YYYY')}</p>
        </div>
    );
};

export default Header;