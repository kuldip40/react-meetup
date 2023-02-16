import React from "react";
import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const history = useHistory();

  const addMeetupHandle = (meetupDaa) => {
    fetch(
      "https://react-meetup-4e0e5-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupDaa),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => history.replace("/"));
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandle} />
    </section>
  );
};

export default NewMeetupPage;
