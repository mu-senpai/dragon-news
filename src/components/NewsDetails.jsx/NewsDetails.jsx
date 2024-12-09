import { Link, useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import RightNavbar from '../RightNavbar/RightNavbar';

const NewsDetails = () => {

    const loaderData = useLoaderData();
    const news = loaderData?.data?.[0] || {}; // Assuming you want the first object from the data array

    // Destructure and provide default values as necessary
    const {
        title = "No Title Available",
        author: { name: authorName = "Unknown Author", img: authorImg = "https://via.placeholder.com/40", published_date = "N/A" } = {},
        thumbnail_url = "https://via.placeholder.com/600x400?text=No+Image",
        details = "No details available.",
        rating: { number: ratingNumber = "N/A", badge: ratingBadge = "N/A" } = {},
        total_view = 0,
        category_id
    } = news || {};

    return (
        <div className="max-w-[80%] mx-auto space-y-10 pb-20">

            <header className="py-4">
                <Header></Header>
            </header>

            <section className='w-full grid grid-cols-12 gap-6'>

                <div className='col-span-9'>
                    <h2 className="text-xl font-semibold mb-5">Dragon News</h2>
                    <div className="w-full mx-auto p-6 bg-white border border-gray-200 rounded-lg space-y-6">
                        <div className="flex items-center mb-4">
                            <img src={authorImg} alt={authorName} className="w-10 h-10 rounded-full mr-3" />
                            <div className="text-sm text-gray-600">
                                <p className="font-medium">{authorName}</p>
                                <p>{published_date}</p>
                            </div>
                        </div>
                        <div className="mb-4">
                            <img src={thumbnail_url} alt="News Thumbnail" className="w-full h-[35rem] object-cover rounded-lg" />
                        </div>
                        <h1 className="text-3xl font-semibold mb-2">{title}</h1>
                        <p className="text-base/normal text-[#706F6F] mb-6">{details}</p>
                        <div className="flex justify-between items-center mt-4">
                            <div className="flex items-center text-yellow-500">
                                <span className="mr-2">Rating:</span>
                                <span className="font-medium text-gray-700">{ratingNumber} ({ratingBadge})</span>
                            </div>
                            <div className="flex items-center text-gray-500">
                                <span className="mr-1">Views:</span>
                                <span>{total_view}</span>
                            </div>
                        </div>
                        <div className="mt-6">
                            <Link to={`/category/${category_id}`} className="px-4 py-2 bg-red-700 text-white rounded-none hover:bg-red-500 transition duration-200">
                                All news in this category
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='col-span-3'>
                    <RightNavbar></RightNavbar>
                </div>
            </section>
        </div>
    );
};

export default NewsDetails;