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
  
}

export async function getStaticProps(context) {
  
  // fetch data for a single meetup
  const meetupId =  context.params.meetupId;
  console.log(meetupId);
  
  return {
    props: {
      meetupData: {
        image: "https://images.unsplash.com/photo-1634917694672-6d47243cc6ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80",
        id: meetupId,
        title: "First Meetup",
        address: "Some Street 5, Some City",
        description: "This is a first meetup"
      },
    },
  };
}

export default MeetUpDetails;