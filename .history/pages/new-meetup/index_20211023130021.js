import NewMeetupForm from '../../components/meetups/NewMeetupForm';


function NewMeetupPage () {
  
  const addMeetupHandler = async (enteredMeetupData) => {
    await fetch();
  }
  
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;