import { createContext, useState, useEffect } from "react";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [book, setBook] = useState([]) 

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("bookings")) || [];
    setBook(storedBooks);
  }, []);

  const addBook = (item) => {
    const updatedBooks = [...book, item];
    setBook(updatedBooks);
    localStorage.setItem("bookings", JSON.stringify(updatedBooks));
  };

  const removeBook = (id) => {
    const updatedBooks = book.filter((bookItem) => bookItem.id !== id);
    setBook(updatedBooks);
    localStorage.setItem("bookings", JSON.stringify(updatedBooks));
  };

  return (
    <BookContext.Provider value={{ book, addBook, removeBook }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;
