import NewMeetupForm from '../../components/meetups/NewMeetupForm';


function NewMeetupPage () {
  
  const addMeetupHandler = async (enteredMeetupData) => {
    const result = await fetch('/api/');

  }
  
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;