import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import EventCard from "../../components/Card/EventCard";
import MsCard from "../../components/Card/MsCard";
import { getCityByName, getWeather } from "../../services/city";
import { getPlacesByCity } from "../../services/place";
import { getActivitiesByCityId } from "../../services/activities";
import { BsWind } from "react-icons/bs";
import { LuDroplets } from "react-icons/lu";
import { IoMdCloudOutline } from "react-icons/io";


import "../Destinations/dest.css";

const City = () => {
  const { slug } = useParams();
  const [city, setCity] = useState(null);
  const [places, setPlaces] = useState([]);
  const [events, setEvents] = useState([]);
  const [weather, setWeather] = useState([]);
  console.log("weather", weather);

  const showCity = async () => {
    try {
      const data = await getCityByName(slug);
      setCity(data);
      return data.id;
    } catch (error) {
      console.error("Error getting city data:", error);
    }
  };

  const showWeather = async () => {
    try {
      const data = await getWeather(slug);
      setWeather(data);
      return data;
    } catch (error) {
      console.error("Error getting city weather:", error);
    }
  };

  const showPlaces = async (cityId) => {
    try {
      const placesData = await getPlacesByCity(cityId);
      setPlaces(placesData);
    } catch (error) {
      console.error("Error getting places data:", error);
    }
  };

  const showEvents = async (cityId) => {
    try {
      const data = await getActivitiesByCityId(cityId);
      setEvents(data);
    } catch (error) {
      console.error("Error getting places data:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const cityId = await showCity();
      if (cityId) {
        await showWeather();
        await showPlaces(cityId);
        await showEvents(cityId);
      }
    };

    fetchData();
    return () => {
      document.title = "Feel Nature Pulse";
    };
  }, [slug]);

  useEffect(() => {
    if (city) {
      document.title = `Destination - ${city.title}`;
    }
  }, [city]);

  return (
    <section>
      {city && (
        <section className="container mt-4">
          <div className="city-top">
            <img src={`https://naturepulse.xyz/${city.banner}`} alt="" />
          </div>
        </section>
      )}
      {city && (
        <div className="container my-5">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-7">
              <h1 className="my-4 city-title">{city.title}</h1>
              <p className="city-desc">{city.description}</p>
            </div>
            <div className="col-lg-4">
              {weather && weather.current && (
                <div className="w-card" >
                  <div className="row mb-4">
                    <div className="col-6">
                      <p className="w-temp">{weather.current.temp_c}°C</p>
                      <p className="mb-0">
                        Feels like {weather.current.feelslike_c}°C
                      </p>
                    </div>
                    <div className="col-6 text-center">
                      <div className="wicon"><img src={`https:${weather.current.condition.icon}`} alt="icon"/></div>
                      <p>{weather.current.condition.text}</p>
                    </div>
                  </div>
                  <div className="d-flex w-detail">
                    <p className="me-3 mb-0"><BsWind />{" "}{weather.current.wind_kph} kph</p>
                    <p className="me-3 mb-0"><LuDroplets />{" "}{weather.current.humidity}</p>
                    <p className="me-3 mb-0"><IoMdCloudOutline />{" "}{weather.current.cloud}</p>
                    <p className="me-3 mb-0">UV{" "}{weather.current.uv}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {places && places.length > 0 && (
        <div className="container">
          <h4>Must seen sights</h4>
          <div className="row gy-4 mt-3 mb-5">
            {places.map((place) => (
              <div className="col-lg-4">
                <MsCard
                  image={`https://naturepulse.xyz/${place.thumbnail}`}
                  title={place.title}
                  city={place.city}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="container">
        <h4>Upcoming events</h4>
        <div className="row gy-3 my-5">
          {events ? (
            events.map((event) => (
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
            ))
          ) : (
            <div className="container">
              <h6 className="text-center">There is no activities yet</h6>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default City;
