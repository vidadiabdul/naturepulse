import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCities } from "../../services/city";
import { getPlaces } from "../../services/place";
import Portrait from "../../components/Card/Portrait";
import CityCard2 from "../../components/Card/CityCard2";
import "./dest.css";
import { PuffLoader } from "react-spinners";
import { useTranslation } from "react-i18next";

const Destinations = () => {
  const [cities, setCities] = useState();
  const [topplaces, setTopPlaces] = useState();
  const { t } = useTranslation();

  const showCities = async () => {
    const data = await getCities();
    const filteredCities = data.filter((city) => city.rating > 4.5);
    setCities(filteredCities);
  };

  const showPlaces = async () => {
    const data = await getPlaces();
    if (Array.isArray(data) && data.length > 0) {
      const filteredPlaces = data.slice(0, 4);
      setTopPlaces(filteredPlaces);
    }
  };

  useEffect(() => {
    showCities();
    showPlaces();
  }, []);

  return (
    <section>
      <div className="dest-ban">
        <div className="shd"></div>
        <div className="container">
          <h1 className="ps-3">{t("navdest")}</h1>
        </div>
      </div>
      <div className="container my-5">
        <h2>{t("dtopcity")}</h2>
        {cities ? (
          <div className="row gy-3 py-5">
            {cities.map((city) => (
              <Link
                to={`/destinations/${city.title}`}
                key={city.id}
                className="col-lg-3 col-sm-12 col-md-6"
              >
                <CityCard2
                  image={`https://naturepulse.xyz/${city.thumbnail}`}
                  title={city.title}
                />
              </Link>
            ))}
          </div>
        ) : (
          <div className="loader">
            <PuffLoader color="#355d5f" />
          </div>
        )}

        <h2>{t("dpopplace")}</h2>
        {topplaces ? (
          <div className="row gy-4 mt-3 mb-5">
            {topplaces &&
              topplaces.map((place) => (
                <div className="col-lg-3">
                  <Portrait
                    image={`https://naturepulse.xyz/${place.thumbnail}`}
                    city="Greenland"
                    title={place.title}
                    description={place.description}
                  />
                </div>
              ))}
          </div>
        ) : (
          <div className="loader">
            <PuffLoader color="#355d5f" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Destinations;
