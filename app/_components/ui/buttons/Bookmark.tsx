"use client";
import { useEffect, useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

const BookmarkButton = () => {
  const BOOKMARKS_KEY = "bookmarks";
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    // On component mount, check if current page is bookmarked
    if (isStored()) {
      markAsStored();
    }
  }, []);

  // Retrieve bookmarks from localStorage
  const getStoredBookmarks = () => {
    const item = localStorage.getItem(BOOKMARKS_KEY);
    return item ? JSON.parse(item) : [];
  };

  // Check if the current page is stored as a bookmark
  const isStored = () => {
    return getStoredBookmarks().includes(window.location.pathname);
  };

  // Mark the page as bookmarked
  const markAsStored = () => {
    setIsBookmarked(true);
  };

  // Unmark the page as bookmarked
  const unmarkAsStored = () => {
    setIsBookmarked(false);
  };

  // Toggle bookmark status
  const toggleBookmark = () => {
    const storedBookmarks = getStoredBookmarks();
    const currentPage = window.location.pathname;

    if (isBookmarked) {
      // Remove bookmark
      const updatedBookmarks = storedBookmarks.filter(
        (bookmark: any) => bookmark !== currentPage
      );
      localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(updatedBookmarks));
      unmarkAsStored();
    } else {
      // Add bookmark
      storedBookmarks.push(currentPage);
      localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(storedBookmarks));
      markAsStored();
    }
  };

  return (
    <button
      type="button"
      className="focus-visible:ring-secondary group inline-flex items-center rounded-lg p-2.5 text-neutral-600 outline-none ring-zinc-500 transition duration-300 hover:bg-neutral-100 focus:outline-none focus-visible:outline-none focus-visible:ring-1 dark:text-neutral-400 dark:ring-zinc-200 dark:hover:bg-neutral-700"
      onClick={toggleBookmark}
    >
      {isBookmarked ? (
        <MdFavorite className="h-6 w-6 text-red-500 dark:text-red-500" />
      ) : (
        <MdFavoriteBorder className="h-6 w-6 text-red-500 dark:text-red-500" />
      )}
    </button>
  );
};

export default BookmarkButton;
