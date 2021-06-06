import React from "react";
import Meetuplist from "../components/meetups/MeetupList";

const dummyData = [
  {
    id: "Meet 1",
    title: "This is the first meetup",
    image:
      "https://d3gl5uvjs9q0p7.cloudfront.net/uploads/2018/10/crowd-e1539802849620.jpg",
    address: "Meetupstreet 1, 12345 Rome",
    description:
      "This is the first meetup event, Welcome to join us in Rome! See you guys soon!",
  },
  {
    id: "Meet 2",
    title: "This is the second meetup",
    image:
      "https://thumbor.granitemedia.com/img/07hulh-7xN6TZdsQhVaelgei4Gc=/874x404/filters:quality(80)/granite-web-prod/08/64/08641875bd944a92b5ee3194853c4fb1.jpg",
    address: "Meetupstreet 1, 12345 New York City",
    description:
      "This is the second meetup event, Welcome to join us in New York! See you guys soon!",
  },
  {
    id: "Meet 3",
    title: "This is the third meetup",
    image:
      "https://www.worldtravelguide.net/wp-content/uploads/2017/04/Think-Sweden-Stockholm-497344880-adisa-copy.jpg",
    address: "Meetupstreet 1, 12345 Stockholm",
    description:
      "This is the first meetup event, Welcome to join us in Stockholm! See you guys soon!",
  },
];
const AllMeetups = () => {
  return (
    <section>
      <h1>All Meetups</h1>
      <Meetuplist meetups={dummyData} />
    </section>
  );
};

export default AllMeetups;
