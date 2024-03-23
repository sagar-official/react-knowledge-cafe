import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    id,
    title,
    cover_img,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="mb-20 space-y-4 ">
      <img
        className="w-full mb-8 rounded-xl"
        src={cover_img}
        alt={`cover photo of the title ${title}`}
      />
      <div className="flex justify-between">
        <div className="flex ">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h2 className="text-2xl">{author}</h2>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min red</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="ml-2 text-purple-600 text-2xl"
          >
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">{hash}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(id, reading_time)}
        className="text-purple-500 font-bold underline"
      >
        Mark ass read
      </button>
    </div>
  );
};

export default Blog;
