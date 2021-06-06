import classes from "./MeetupItem.module.css";
import Card from "../ui/Card.js";

const MeetupItem = (props) => {
  return (
    <li className={classes.item}>
      <Card>
        <div>
          <img className={classes.image} src={props.image} alt="Meetup" />
        </div>
        <h3 className={classes.title}>{props.title}</h3>

        <address className={classes.address}>{props.address}</address>
        <p className={classes.description}>{props.description}</p>
        <button className={classes.btn}>Add to Favourite</button>
      </Card>
    </li>
  );
};

export default MeetupItem;
