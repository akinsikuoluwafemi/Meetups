import NewMeetupForm from '../../components/meetups/NewMeetupForm';


function NewMeetupPage () {
  
  const addMeetupHandler = async (enteredMeetupData) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        
      }
    });

  }
  
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;