import { Link } from "react-router-dom";

const NewsCard = (props = {}) => {
    const { news } = props || {};
  
    const {
      _id,
      title = "No Title Available",
      author: { name: authorName = "Unknown Author", img: authorImg = "https://via.placeholder.com/40", published_date = "N/A" } = {},
      thumbnail_url = "https://via.placeholder.com/600x400?text=No+Image",
      details = "No details available.",
      rating: { number: ratingNumber = "N/A" } = {},
      total_view = 0
    } = news;
  
    return (
      <div className="w-full bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        {/* Author Info */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center">
            <img
              src={authorImg}
              alt={authorName}
              className="w-10 h-10 rounded-full object-cover mr-3"
            />
            <div className="text-sm text-gray-500">
              <p className="font-medium">{authorName}</p>
              <p>{published_date}</p>
            </div>
          </div>
        </div>
        {/* Image Section */}
        <div className="relative">
          <img
            src={thumbnail_url}
            alt="News Thumbnail"
            className="w-full h-72 object-cover"
          />
          <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v16l6-6h8l6 6V4M2 20l2-2m4 2l-2-2" />
            </svg>
          </div>
        </div>
        {/* Content Section */}
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            {title}
          </h2>
          <p className="text-gray-600 mb-3">
            {details.slice(0, 100)}...
            <Link to={`/news/${_id}`} className="text-blue-500 cursor-pointer hover:underline"> Read More</Link>
          </p>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center text-yellow-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.96a1 1 0 00.95.69h4.184c.969 0 1.372 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.96c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.54-1.118l1.286-3.96a1 1 0 00-.364-1.118L2.173 9.386c-.784-.57-.38-1.81.588-1.81h4.184a1 1 0 00.95-.69l1.286-3.96z" />
              </svg>
              <span className="font-medium text-gray-700">{ratingNumber}</span>
            </div>
            <div className="flex items-center text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H5.21m6.79 0c0 3.132-2.014 5.978-5.14 6.937M11.21 3.21c1.05 2.252-.964 5.042-3.14 5.79m9.29-2.21a9.71 9.71 0 00-4.14-5.79m-3.92 9a5 5 0 01-1.79-3.79M5 12v-.01" />
              </svg>
              <span>{total_view}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default NewsCard;
  