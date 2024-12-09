import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(response => response.json())
        .then(data => setCategories(data.data.news_category))
    }, [])

    return (
        <div>
            <h2 className="text-xl font-semibold mb-5">All Caterogy</h2>
            <div className="flex flex-col gap-5">
                {
                    categories.map(category => <NavLink to={`category/${category.category_id}`} className="btn text-lg font-medium text-[#9F9F9F] bg-transparent" key={category.category_id}>{category.category_name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;