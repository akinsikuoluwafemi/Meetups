import NewMeetupForm from '../../components/meetups/NewMeetupForm';


const NewMeetupPage = () => {
  
  const addMeetupHandler = (enteredMeetupDate) => {
    
  }
  
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;