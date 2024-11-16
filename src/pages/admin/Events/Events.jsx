import React, { useEffect, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import Head from "../component/Head";
import { getActivities } from "../../../services/activities";
import { Link } from "react-router-dom";
import { PuffLoader } from "react-spinners";

const Events = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [acts, setActs] = useState([]);

  const showAllActivities = async () => {
    const data = await getActivities();
    setActs(data);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = String(date.getFullYear()).slice(2); // Get last two digits of the year
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day}.${month}.${year} ${hours}:${minutes}`;
  };

  useEffect(() => {
    showAllActivities();
  }, []);

  return (
    <div className="container">
      <Head
        title="Events"
        startDate={startDate}
        ediDate={(date) => setStartDate(date)}
      />
      {acts && acts.length > 0 ? (
      <div className="mt-3">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Id</th>
              <th>Added</th>
              <th>Title</th>
              <th>Price</th>
              <th>Booked</th>
              <th>Total</th>
              <th>Avaliable</th>
              <th>Deadline</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            
              {acts.map((act) => (
                <tr key={act.id}>
                  <td>{act.id}</td>
                  <td>{formatDate(act.created_at)}</td>
                  <td>{act.title}</td>
                  <td>${act.price}</td>
                  <td>{act.booked}</td>
                  <td>${act.price * act.booked}</td>
                  <td>{act.capacity - act.booked}</td>
                  <td>01.06.24</td>
                  <td>
                    <Link to={`/activities/${act.title}`} target="_blank" rel="noopener noreferrer">
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

export default Events;
