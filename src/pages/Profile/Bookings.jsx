import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./account.css";
import { BookContext } from "../../context/BookContext";
import BookCard from "../../components/Card/BookCard";
import { useTranslation } from "react-i18next";

const Bookings = () => {
  const { book } = useContext(BookContext);
  const { t } = useTranslation();

  const totalPrice = book.reduce((total, item) => {
    const itemPrice = parseFloat(item.price);
    return total + itemPrice;
  }, 0);

  console.log("totalPrice", totalPrice);
  return (
    <div>
      <h5 className="mb-4">{t("navbook")}</h5>
      <div className="row">
        <div className="col-lg-8 rounded-3">
          <div className="d-flex flex-column row-gap-4">
            {book &&
              book.map((item) => (
                <Link to={`/activities/${item.title}`}>
                  <BookCard
                    id={item.id}
                    image={`https://naturepulse.xyz/${item.thumbnail}`}
                    title={item.title}
                    location={item.location}
                    participant={item.participant}
                    date={item.formatted_date}
                    price={item.price}
                  />
                </Link>
              ))}
          </div>
        </div>
        <div className="col-lg-4 rounded-3">
          <div className="total">
            <h6>{t("price")}: {totalPrice.toFixed(2)} $</h6>
            <h6>{t("discount")}: 0 $</h6>
            <hr />
            <h5>{t("total")}: {totalPrice.toFixed(2)} $</h5>
            <Link className="btn btn-dark w-100 my-2">{t("btn-checkout")}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
