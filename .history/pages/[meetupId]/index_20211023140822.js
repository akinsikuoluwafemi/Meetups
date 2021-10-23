import { MongoClient} from 'mongodb';
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetUpDetails = () => {
  

  return (
    <MeetupDetail
      image="https://images.unsplash.com/photo-1634917694672-6d47243cc6ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80"
      title="First Meetup"
      address="Some Street 5, Some City"
      description="This is a first meetup"
    />
  );
}

export async function getStaticPaths () {
  
  
  const client = await MongoClient.connect(
    "mongodb+srv://femi:OemNYGZtTgT8JxE8@cluster0.9xctp.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  // get all the meetup id
  const AllmeetupsId = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close()
  // console.log(AllmeetupsId)


  
  return {
    fallback: false,
    paths: AllmeetupsId.map(meetup_id => ({params: {meetupId: meetup_id._id.toString()}}))
  };
}

export async function getStaticProps(context) {
  
  // fetch data for a single meetup
  const meetupId =  context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://femi:OemNYGZtTgT8JxE8@cluster0.9xctp.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({ _id: meetupId });

  client.close();
  
  return {
    props: {
      meetupData: selectedMeetup
    },
  };
}

export default MeetUpDetails;