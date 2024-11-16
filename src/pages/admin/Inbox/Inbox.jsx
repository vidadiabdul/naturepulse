import React, { useEffect, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { BsReply } from "react-icons/bs";
import { PuffLoader } from "react-spinners";

import Head from "../component/Head";
import { getAllContact } from "../../../services/contact";
import { Link } from "react-router-dom";

const Inbox = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [contacts, setContact] = useState([]);

  const showAllContact = async () => {
    const resp = await getAllContact();
    setContact(resp.contacts);
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
    showAllContact();
  }, []);

  return (
    <div className="container">
      <Head
        title="Contact"
        startDate={startDate}
        ediDate={(date) => setStartDate(date)}
      />
        {contacts && contacts.length > 0 ? (
      <div className="mt-3">
          <table className="table table-hover table-striped">
            <thead>
              <tr>
                <th>Sent</th>
                <th>Fullname</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="inboxtbody">
              {contacts.map((contact) => (
                <tr key={contact.id}>
                  <td>{formatDate(contact.created_at)}</td>
                  <td>{contact.fullname}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                  <td>{contact.message}</td>
                  <td>
                    <Link target="_blank" rel="noopener noreferrer">
                      <IoEyeOutline className="me-2" />
                    </Link>
                    <BsReply />
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
}

export default Inbox;
