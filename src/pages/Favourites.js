import React, { useContext } from "react";
import FavouritesContext from "../store/favourites-context";
import MeetupList from "../components/meetups/MeetupList";

const Favourites = () => {
  const favouritesCtx = useContext(FavouritesContext);

  let content;
  if (favouritesCtx.totalFavourites === 0) {
    content = <span>You don't have favourites yet, add some!</span>;
  } else {
    content = <MeetupList meetups={favouritesCtx.favourites} />;
  }

  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
};

export default Favourites;
