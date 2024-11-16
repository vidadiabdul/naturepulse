import React, { useEffect, useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import EventCard from "../../components/Card/EventCard";
import CityCard from "../../components/Card/CityCard";
import Portrait from "../../components/Card/Portrait";
import YoutubeEmbed from "../../components/YoutubeFrame";
import Masonry from "../../components/Masonry";
import { getCities } from "../../services/city";
import { getPlaces } from "../../services/place";
import { getActivities } from "../../services/activities";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [topcities, setTopCities] = useState();
  const [upevents, setUpEvents] = useState();
  const [topplaces, setTopPlaces] = useState();

  const showCities = async () => {
    const data = await getCities();
    if (Array.isArray(data) && data.length > 0) {
      const filteredCities = data.slice(0, 8);
      setTopCities(filteredCities);
    }
  };

  const showPlaces = async () => {
    const data = await getPlaces();
    if (Array.isArray(data) && data.length > 0) {
      const filteredPlaces = data.slice(0, 4);
      setTopPlaces(filteredPlaces);
    }
  };

  const showLatestEvents = async () => {
    const data = await getActivities();
    if (Array.isArray(data) && data.length > 0) {
      const filteredEvents = data.slice(0, 3);
      setUpEvents(filteredEvents);
    }
  };

  useEffect(() => {
    showCities();
    showPlaces();
    showLatestEvents();
  }, []);

  

  const { t } = useTranslation();

  return (
    <>
      <div className="ban text-center">
        <h1>{t("bantitle")}</h1>
        <h5 className="mb-5">{t("bansubtitle")}</h5>
        <div>
          <Link to="/activities" className="btn btn-dark px-4">
            {t("btn-seeact")}
          </Link>
        </div>
      </div>

      <section className="container my-5 about">
        <div className="row py-5 gy-5">
          <div className="col-lg-6 col-sm-12 align-content-center">
            <h1 className="mb-5"> {t("htau")}</h1>
            <p>{t("hpau")}</p>
            <button className="btn btn-outline-dark px-5 py-2 mt-3">
              {t("btn-abus")}
            </button>
          </div>
          <div className="col-lg-6 col-sm-12 align-content-center">
            <YoutubeEmbed embedId="pgK50iZRstA" quality="hd1080" />
          </div>
        </div>
      </section>

      <section className="container my-5">
        <Masonry />
      </section>

      <section className="container my-5">
        <div className="d-flex justify-content-between align-items-center">
          <h2>{t("htopdest")}</h2>
          <Link to="/destinations" className="btn btn-outline-dark px-4 py-1">
            {t("btn-seeall")}
          </Link>
        </div>
        <div className="row gy-4 mb-5 mt-3">
          {topcities &&
            topcities.map((city) => (
              <Link
                to={`/destinations/${city.title}`}
                key={city.id}
                className="col-lg-3 col-sm-12 col-md-4"
              >
                <CityCard
                  image={`https://naturepulse.xyz/${city.thumbnail}`}
                  title={city.title}
                />
              </Link>
            ))}
        </div>
      </section>

      <section className="container my-5">
        <div className="d-flex justify-content-between align-items-center my-5">
          <h2>{t("hlatev")}</h2>
          <Link to="/activities" className="btn btn-outline-dark px-4 py-1">
            {t("btn-seeall")}
          </Link>
        </div>
        <div className="row gy-3">
          {upevents &&
            upevents.map((event) => (
              <Link
                key={event.id}
                to={`/activities/${event.title}`}
                className="col-lg-4 col-sm-12 col-md-4"
              >
                <EventCard
                  id={event.id}
                  title={event.title}
                  image={`https://naturepulse.xyz/${event.thumbnail}`}
                  category={event.category}
                  location={event.location}
                  date={event.formatted_date}
                  price={event.price}
                />
              </Link>
            ))}
        </div>
      </section>

      <section className="container my-5">
        <h2>{t("hhidtre")}</h2>
        <div className="row gy-4 mt-3 mb-5">
          {topplaces &&
            topplaces.map((place) => (
              <div key={place.id} className="col-lg-3 col-sm-12 col-md-4">
                <Portrait
                  image={`https://naturepulse.xyz/${place.thumbnail}`}
                  title={place.title}
                  description={place.description}
                />
              </div>
            ))}
        </div>
      </section>

      <section className="container">
        <div className="sub-card">
          <div className="col-lg-6 col-sm-12">
            <img
              style={{ width: "100%" }}
              src="https://cdn.getyourguide.com/tf/assets/static/newsletter-signup/newsletter-background.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-6 col-sm-12 sub-cont">
            <h2 className="fw-semibold">{t("hsubt")}</h2>
            <p className="text-muted">{t("hsubp")}</p>
            <div className="row gy-3">
              <div className="col-lg-8 col-sm-12">
                <input
                  className="form-control py-3 w-100"
                  type="email"
                  placeholder="Your email"
                />
              </div>
              <div className=" col-lg-4 col-sm-12">
                <button className="btn btn-dark py-3 w-100">
                  {t("btn-subs")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
