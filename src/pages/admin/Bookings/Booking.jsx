import React, { useEffect, useState } from "react";
import Head from "../component/Head";
import { getAllBookings } from "../../../services/booking";
import { PuffLoader } from "react-spinners";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "../admin.css";
const Booking = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [books, setBooks] = useState([]);
  console.log("books", books);

  const showAllBookings = async () => {
    const resp = await getAllBookings();
    setBooks(resp.data);
  };

  useEffect(() => {
    showAllBookings();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = String(date.getFullYear()).slice(2); // Get last two digits of the year
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day}.${month}.${year} ${hours}:${minutes}`;
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "confirmed":
        return "status-confirmed";
      case "pending":
        return "status-pending";
      case "canceled":
        return "status-canceled";
      default:
        return "";
    }
  };

  return (
    <div className="container">
      <Head
        title="Booking"
        startDate={startDate}
        ediDate={(date) => setStartDate(date)}
      />

      {books && books.length > 0 ? (
        <div className="mt-3">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>Booked</th>
                <th>Activity</th>
                <th>User</th>
                <th>Participant</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id}>
                  <td>{formatDate(book.booked_time)}</td>
                  <td>{book.booked_activity}</td>
                  <td>{book.booked_user}</td>
                  <td></td>
                  <td>
                    <div className={getStatusClass(book.book_status)}>
                      {book.book_status}
                    </div>
                  </td>
                  <td>
                    <Link
                      to={`/bookivities/${book.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <IoEyeOutline />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="loader">
          <PuffLoader color="#355d5f" />
        </div>
      )}
    </div>
  );
};

export default Booking;
