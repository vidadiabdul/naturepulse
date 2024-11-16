import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import EventCard from "../../components/Card/EventCard";
import CityCard2 from "../../components/Card/CityCard2";
import "./search.css";
import { useTranslation } from "react-i18next";

const Search = () => {
  const [destinations, setDestinations] = useState([]);
  const [activities, setActivities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSearch = async () => {
    navigate(`?q=${searchTerm}`);
    try {
      const resp = await axios.get(
        `https://naturepulse.xyz/api/search?query=${searchTerm}`
      );
      setDestinations(resp.data.destinations);
      setActivities(resp.data.activities);
      console.log("data nedi", resp);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <section className="search-ban py-5">
        <div className="search-field">
          <div className="container">
            <h2 className="mb-5 text-center text-white">
            {t("sp-title")}
            </h2>
            <div className="row gy-3 justify-content-center">
              <div className="col-lg-5 col-sm-12 col-md-7">
                <input
                  className="form-control w-100 py-2"
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onKeyUp={handleKeyPress}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="col-lg-2 col-sm-12 col-md-3">
                <button
                  className="btn btn-dark w-100 py-2"
                  onClick={handleSearch}
                >
                  {t("btn-search")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-5">
        {destinations && destinations.length > 0 && (
          <>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="mb-0">{t("navdest")}</h3>
              <p className="text-muted mb-0">
                {destinations.length}{" "}
                {destinations.length === 1 ? t("sp-result") : t("sp-results")}
              </p>
            </div>
            <div className="row mb-4">
              {destinations.map((destination) => (
                <Link
                  to={`/destinations/${destination.title}`}
                  key={destination.id}
                  className="col-lg-3 col-md-6 mb-4"
                >
                  <CityCard2
                    image={`https://naturepulse.xyz/${destination.thumbnail}`}
                    title={destination.title}
                  />
                </Link>
              ))}
            </div>
          </>
        )}
        {activities && activities.length > 0 && (
          <>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="mb-0">{t("navact")}</h3>
              <p className="text-muted mb-0">
                {activities.length}{" "}
                {activities.length === 1 ? t("sp-result") : t("sp-results")}
              </p>
            </div>
            <div className="row mb-5">
              {activities.map((act) => (
                <Link
                  to={`/activities/${act.title}`}
                  key={act.id}
                  className="col-lg-4 col-md-6 mb-4"
                >
                  <EventCard
                    id={act.id}
                    title={act.title}
                    image={`https://naturepulse.xyz/${act.thumbnail}`}
                    location={act.location}
                    category={act.category}
                    date={act.formatted_date}
                    price={act.price}
                  />
                </Link>
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Search;
