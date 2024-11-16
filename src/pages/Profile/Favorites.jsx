import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FavContext } from "../../context/FavContext";
import FavCard from "../../components/Card/FavCard";
import { useTranslation } from "react-i18next";

const Favorites = () => {
  const { fav } = useContext(FavContext);
  const { t } = useTranslation();

  return (
    <div>
      <h5 className="mb-4">{t("navfav")}</h5>

      <div className="d-flex flex-column row-gap-4">
        {fav &&
          fav.map((item) => (
            <Link to={`/activities/${item.title}`}>
              <FavCard
                id={item.id}
                image={item.image}
                title={item.title}
                location={item.location}
                category={item.category}
                date={item.date}
                price={item.price}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Favorites;
