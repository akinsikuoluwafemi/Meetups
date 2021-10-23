import { MongoClient, ObjectId} from 'mongodb';
import MeetupDetail from "../../components/meetups/MeetupDetail";
import Head from 'next/head';

const MeetUpDetails = ({ meetupData }) => {
  

  return (
    <>
      <Head>
        <title>{ meet}</title>
        
      </Head>

      <MeetupDetail
        image={meetupData.image}
        title={meetupData.title}
        address={meetupData.address}
        description={meetupData.description}
      />
    </>
  );
};

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

  const selectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });

  client.close();
  
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description
      },
    },
  };
}

export default MeetUpDetails;