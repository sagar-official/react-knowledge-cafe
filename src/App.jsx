import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/Bookmarks/BookMarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTimg] = useState(0);

  const handleMarkAsRead = (id, time) => {
    const newReadingTime = readingTime + time;
    setReadingTimg(newReadingTime);
    // remove the read blog from bookmarks
    // console.log("remove bookmark", id);
    const remainingBookmars = bookmarks.filter(
      (bookmarks) => bookmarks.id !== id
    );
    setBookmarks(remainingBookmars);
  };

  const handleAddToBookmark = (blog) => {
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
  };

  return (
    <>
      <Header></Header>
      <div className="md: flex max-w-7xl mx-auto">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <BookMarks bookmarks={bookmarks} readingTime={readingTime}></BookMarks>
      </div>
    </>
  );
}

export default App;
