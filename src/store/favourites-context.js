import { createContext } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
});

function FavouritesContextProvider(props) {
  const context = {};
  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  );
}
