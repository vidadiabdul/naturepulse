import React, { useEffect, useState } from "react";
import { getCategories } from "../../services/categories";
import {
  getActivitiesByCategory,
  getActivities,
  searchActivities,
} from "../../services/activities";
import { Link } from "react-router-dom";
import EventCard from "../../components/Card/EventCard";
import "./activity.css";
import { PuffLoader } from "react-spinners";
import { useTranslation } from "react-i18next";

const ActivityList = () => {
  const [categories, setCategories] = useState([]);
  const [acts, setActs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [filteredActs, setFilteredActs] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [sortType, setSortType] = useState("newest");
  const { t } = useTranslation();

  const showCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };

  const showAllActivities = async () => {
    const data = await getActivities(sortType);
    setActs(data);
    setFilteredActs(data);
    const uniqueLocations = getUniqueLocations(data);
    setLocations(uniqueLocations);
  };

  const getUniqueLocations = (activities) => {
    const uniqueLocations = Array.from(
      new Set(activities.map((act) => act.location))
    );
    return uniqueLocations.map((location) => ({
      id: location,
      title: location,
    }));
  };

  const showActivitiesByCategory = async (categoryId) => {
    const data = await getActivitiesByCategory(categoryId, sortType);
    setActs(data);
    setFilteredActs(data);
    const uniqueLocations = getUniqueLocations(data);
    setLocations(uniqueLocations);
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    if (categoryId) {
      showActivitiesByCategory(categoryId);
    } else {
      showAllActivities();
    }
  };

  const handleLocationChange = (event) => {
    const locationId = event.target.value;
    setSelectedLocation(locationId);
    filterActivities({ location: locationId, keyword, sortType });
  };

  const handleSearchChange = (event) => {
    const keyword = event.target.value;
    setKeyword(keyword);
    filterActivities({ keyword, location: selectedLocation, sortType });
  };

  const filterActivities = async ({
    keyword = "",
    location = "",
    sortType = "newest",
  }) => {
    let data;
    if (selectedCategory) {
      data = await getActivitiesByCategory(selectedCategory, sortType);
    } else {
      data = await getActivities(sortType);
    }

    if (keyword) {
      data = data.filter((act) =>
        act.title.toLowerCase().includes(keyword.toLowerCase())
      );
    }

    if (location) {
      data = data.filter((act) => act.location === location);
    }

    setFilteredActs(data);
  };

  const clearFilter = () => {
    setSelectedCategory(null);
    setSelectedLocation("");
    setKeyword("");
    showAllActivities();
  };

  useEffect(() => {
    showCategories();
    showAllActivities();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      showActivitiesByCategory(selectedCategory);
    } else {
      showAllActivities();
    }
  }, [sortType]);

  return (
    <>
      <div className="act-ban">
        <div className="shd"></div>
        <div className="container">
          <h1 className="ps-3">{t("navact")}</h1>
        </div>
      </div>
      <div className="container my-5">
        {categories && (
          <ul className="nav nav-underline">
            <li className="nav-item me-2">
              <Link
                className={`nav-link ${
                  selectedCategory === null ? "active" : ""
                }`}
                onClick={() => handleCategoryChange(null)}
              >
                {t("cat-all")}
              </Link>
            </li>
            {categories.map((cat) => (
              <li key={cat.id} className="nav-item me-2">
                <Link
                  className={`nav-link ${
                    selectedCategory === cat.id ? "active" : ""
                  }`}
                  onClick={() => handleCategoryChange(cat.id)}
                >
                  {cat.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="container mb-5">
        <div className="row gy-3 mb-5">
          <div className="col-lg-4">
            <div className="row gy-2 align-items-center">
              <div className="col-lg-3 col-sm-12 col-md-12">
                <span className="fw-semibold">{t("fikeyword")}:</span>
              </div>
              <div className="col-lg-9 col-sm-12 col-md-12">
                <input
                  value={keyword}
                  onChange={handleSearchChange}
                  type="text"
                  className="form-control"
                  placeholder="Ex: Lakeside camp"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="row gy-2 align-items-center">
              <div className="col-lg-4 col-sm-12 col-md-12">
                <span className="fw-semibold">{t("filocation")}:</span>
              </div>
              <div className="col-lg-8 col-sm-12 col-md-12">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  value={selectedLocation}
                  onChange={handleLocationChange}
                >
                  <option value="">All</option>
                  {locations.map((location) => (
                    <option key={location.id} value={location.id}>
                      {location.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="col-lg-2 align-content-center">
            <Link onClick={clearFilter}>{t("btnclearfilter")}</Link>
          </div>
        </div>

        <div>
          <div className="row gy-3 justify-content-between align-items-center mb-3">
            <div className="col-lg-3 col-sm-12 col-md-6">
              <h5 className="fw-semibold mb-0">{t("fifound")}: {filteredActs.length}</h5>
            </div>
            <div className="col-lg-3 col-sm-12 col-md-6">
              <div className="row gy-2 align-items-center">
                <div className="col-lg-4 col-sm-12 col-md-12">
                  <span className="fw-semibold">{t("fisort")}:</span>
                </div>
                <div className="col-lg-8 col-sm-12 col-md-12">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    value={sortType}
                    onChange={(e) => setSortType(e.target.value)}
                  >
                    <option value="newest">{t("sort-new")}</option>
                    <option value="low">{t("sort-low")}</option>
                    <option value="high">{t("sort-high")}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div>
            {filteredActs && filteredActs.length > 0 ? (
              <div className="row g-3 pb-5">
                {filteredActs.map((act) => (
                  <Link
                    to={`/activities/${act.title}`}
                    key={act.id}
                    className="col-lg-4 col-sm-12 col-md-6"
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
            ) : (
              <div className="loader">
                <PuffLoader color="#355d5f" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityList;
