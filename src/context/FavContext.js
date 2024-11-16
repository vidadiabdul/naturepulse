import { createContext, useEffect, useState } from "react";

export const FavContext = createContext();

const FavProvider = ({ children }) => {
  const [fav, setFav] = useState([]);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFav(storedFavs);
  }, []);

  const addFav = (item) => {
    const updatedFavs = [...fav, item];
    setFav(updatedFavs);
    localStorage.setItem("favorites", JSON.stringify(updatedFavs));
  };

  const removeFav = (id) => {
    const updatedFavs = fav.filter((favItem) => favItem.id !== id);
    setFav(updatedFavs);
    localStorage.setItem("favorites", JSON.stringify(updatedFavs));
  };

  return (
    <FavContext.Provider value={{ fav, addFav, removeFav }}>
      {children}
    </FavContext.Provider>
  );
};

export default FavProvider;
