import NewMeetupForm from '../../components/meetups/NewMeetupForm';


function NewMeet () {
  
  const addMeetupHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData);
  }
  
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;