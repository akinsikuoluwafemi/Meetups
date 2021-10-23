import {MongoClient } from 'mongodb';
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

export default function HomePage(props) {
  
  return (
      <MeetupList meetups={props.meetups} />
  );
}

// export async function getServerSideProps (context) {
//   // fetch data from the api
//   const req = context.req;
//   const res = context.res;



//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }


export async function getStaticProps (context) {
  // fetch data from an API

  const client = await MongoClient.connect(
    "mongodb+srv://femi:OemNYGZtTgT8JxE8@cluster0.9xctp.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups =  await meetupsCollection.find().toArray();
  
  client.close()


  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toS
      }))
    },
    revalidate: 1
  };
}