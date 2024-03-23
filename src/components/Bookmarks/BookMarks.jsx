import Bookmark from "../singleBookMark/Bookmark";

const BookMarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4">
      <div>
        <h3 className="text-4xl">Reading time :{readingTime}</h3>
      </div>
      <h2 className="text-3xl text-center">
        BookMarked Blogs : {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark ,idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

export default BookMarks;
