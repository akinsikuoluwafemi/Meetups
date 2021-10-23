import NewMeetupForm from '../../components/meetups/NewMeetupForm';


function NewMeetupPage () {
  
  const addMeetupHandler = (enteredMeetupData) => {
    
  }
  
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;