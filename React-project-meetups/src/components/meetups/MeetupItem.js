import { useContext } from "react";

import classes from "./MeetupItem.module.css";
import Card from "../ui/Card.js";
import FavouritesContext from "../../store/favourites-context";

const MeetupItem = (props) => {
  const FavouritesCtx = useContext(FavouritesContext);
  const itemIsFavourite = FavouritesCtx.itemIsFavourite(props.id);

  function toggleFavouriteStatus() {
    if (itemIsFavourite) {
      FavouritesCtx.removeFavourites(props.id);
    } else {
      FavouritesCtx.addFavourites({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div>
          <img className={classes.image} src={props.image} alt="Meetup" />
        </div>
        <h3 className={classes.title}>{props.title}</h3>

        <address className={classes.address}>{props.address}</address>
        <p className={classes.description}>{props.description}</p>
        <button onClick={toggleFavouriteStatus} className={classes.btn}>
          {itemIsFavourite ? "Remove from Favourites" : "To Favourites"}
        </button>
      </Card>
    </li>
  );
};

export default MeetupItem;
