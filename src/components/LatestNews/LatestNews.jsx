import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex items-center gap-5 p-4 bg-[#F3F3F3]">
            <p className="text-xl text-white px-6 py-2 bg-[#D72050]">Latest</p>
            <Marquee pauseOnHover={true} speed={80}>
                <Link className="text-lg font-semibold mr-2" to={`/news`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe provident quo nemo temporibus suscipit aut facilis consequuntur atque dignissimos dolorum.</Link>
                <Link className="text-lg font-semibold mr-2" to={`/news`}>Korem ipsum dolor sit amet, consectetur adipisicing elit. Saepe provident quo nemo temporibus suscipit aut facilis consequuntur atque dignissimos dolorum.</Link>
                <Link className="text-lg font-semibold mr-2" to={`/news`}>Rorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe provident quo nemo temporibus suscipit aut facilis consequuntur atque dignissimos dolorum.</Link>
            </Marquee>       
        </div>
    );
};

export default LatestNews;