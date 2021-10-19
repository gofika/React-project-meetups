import React from "react";
import { useHistory } from "react-router-dom/";
import NewMeetupForm from "../components/meetups/NewMeetupForm.js";

function NewMeetup() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-meetups-e3fed-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <div>
      <h1>New meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
}

export default NewMeetup;
