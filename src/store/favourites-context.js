import { createContext, useState } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourites: (favouriteMeetup) => {},
  removeFavourites: (meetupId) => {},
  itemIsFavourite: (meetupId) => {},
});

export function FavouritesContextProvider(props) {
  const [userFavourites, setUserFavourites] = useState([]);

  function addFavourites(favouriteMeetup) {
    setUserFavourites((prevUserFavourites) => {
      return prevUserFavourites.concat(favouriteMeetup);
    });
  }
  function removeFavourites(meetupId) {
    setUserFavourites((prevUserFavourites) => {
      return prevUserFavourites.filter((meetup) => meetup.id !== meetupId);
    });
  }
  function itemIsFavourite(meetupId) {
    setUserFavourites((prevUserFavourites) => {
      return prevUserFavourites.some((meetup) => meetup.id === meetupId);
    });
  }

  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourites: addFavourites,
    removeFavourites: removeFavourites,
    itemIsFavourite: itemIsFavourite,
  };

  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContext;
