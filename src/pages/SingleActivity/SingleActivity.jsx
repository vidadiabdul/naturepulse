import React, { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./single.css";
import { useParams, useNavigate } from "react-router-dom";
import { MdDone, MdClose } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { getActivityById, getActivities } from "../../services/activities";
import { BookContext } from "../../context/BookContext";
import { PuffLoader } from "react-spinners";

const SingleActivity = () => {
  const { slug } = useParams();
  const [act, setActivity] = useState(null);
  const { addBook } = useContext(BookContext);
  const [participant, setParticipantCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  const handleParticipant = (e) => {
    const newParticipantCount = parseInt(e.target.value, 10) || 1;
    setParticipantCount(newParticipantCount);
    updateTotalPrice(newParticipantCount);
  };

  const updateTotalPrice = (participants) => {
    if (act && act.price) {
      const pricePerPerson = act.price;
      const total = participants * pricePerPerson;
      setTotalPrice(total);
    }
  };

  const handleBookNow = (e) => {
    e.preventDefault();
    const bookingData = { ...act, participant };
    addBook(bookingData);
    navigate("/account/bookings");
  };

  useEffect(() => {
    const showActivity = async () => {
      try {
        const activities = await getActivities();
        const activity = activities.find((act) => act.title === slug);
        if (activity) {
          const data = await getActivityById(activity.id);
          setActivity(data);
          updateTotalPrice(1);
        }
      } catch (error) {
        console.error("Error getting activity data:", error);
      }
    };

    showActivity();

    return () => {
      document.title = "Feel Nature Pulse";
    };
  }, [slug]);

  useEffect(() => {
    if (act) {
      document.title = `Activity - ${act.title}`;
    }
  }, [act]);

  return (
    <>
      {act ? (
        <div className="container mb-5">
          <h1 className="mt-5">{act.title}</h1>
          <div className="my-3 d-flex flex-wrap gy-2">
            <div className="d-flex me-3">
              <span className="text-muted me-2">Date:</span>
              <span className="fw-semibold text-success">
                {act.formatted_date}
              </span>
            </div>
            <div className="d-flex me-3">
              <span className="text-muted me-2">Location:</span>
              <span className="fw-semibold text-success">{act.location}</span>
            </div>
            <div className="d-flex me-3">
              <span className="text-muted me-2">Category:</span>
              <span className="fw-semibold text-success">{act.category}</span>
            </div>
          </div>
          <div className="saimg mb-5">
            <div className="asimg">
              <img src={`https://naturepulse.xyz/${act.thumbnail}`} alt="" />
            </div>
          </div>
          <div className="row gx-2">
            <div className="col-lg-8 col-sm-12 col-md-12 pe-2">
              <div className="mb-5">
                <h3 className="mb-3 fw-semibold">Description</h3>
                <p>{act.description}</p>
              </div>
              <div className="mb-5">
                <h4 className="mb-3">Itinerary</h4>
                <p className="text-muted">{act.itinerary}</p>
              </div>
              <div className="mb-5">
                <h4 className="mb-3">Price inluded</h4>
                <p className="text-muted">
                  <MdDone className="text-success me-2" />
                  {act.included}
                </p>
              </div>
              <div className="mb-5">
                <h4 className="mb-3">Price Excluded</h4>
                <p className="text-muted">
                  <MdClose className="text-danger me-2" />
                  {act.excluded}
                </p>
              </div>
              <div className="mb-5">
                <h4 className="mb-3">Additional info</h4>
                <p className="text-muted">{act.addinfo}</p>
              </div>
              <div className="mb-5">
                <h4 className="mb-3">Note</h4>
                <p className="text-muted">{act.note}</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-12">
              <aside className="enquiry">
                <div>
                  <div className="asidetop p-4">
                    <div className="d-flex justify-content-between">
                      <div className="bg-light px-3 py-1 rounded-2">Price</div>
                      <CiHeart />
                    </div>
                    <h1>
                      ${act.price}
                      <span> / per person</span>
                    </h1>
                  </div>
                  <div className="p-4">
                    <Form onSubmit={handleBookNow}>
                      <Form.Group className="mb-3" controlId="Participant">
                        <Form.Label>Participant</Form.Label>
                        <Form.Control
                          type="number"
                          value={participant}
                          onChange={handleParticipant}
                          min="1"
                        />
                      </Form.Group>
                      <h5 className="my-3">Total: ${totalPrice}</h5>
                      <Button variant="dark" className="w-100" type="submit">
                        Add to card
                      </Button>
                    </Form>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>   ) : (
          <div className="loader">
            <PuffLoader color="#355d5f" />
          </div>
      )}
    </>
  );
};

export default SingleActivity;
