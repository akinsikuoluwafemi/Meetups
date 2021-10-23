import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';


const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://images.unsplash.com/photo-1634917694672-6d47243cc6ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80",
    address: "Some address 5, 1234 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://images.unsplash.com/photo-1634917694672-6d47243cc6ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80",
    address: "Some address 10, 1234 Some City",
    description: "This is a second meetup!",
  },
];

export default function HomePage() {
  
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    // send hhtp request
    setLoadedMeetups(DUMMY_MEETUPS);
  },[])
  
  return (
      <MeetupList meetups={loadedMeetups} />
  );
}


export async function getStaticProps () {
  // fetch data from an API
  return {}
}