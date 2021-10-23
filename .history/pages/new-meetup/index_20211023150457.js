import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import Head from ''

function NewMeetupPage () {
  
  const { push } = useRouter();

  const addMeetupHandler = async (enteredMeetupData) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    console.log(data, 'mongo worked');

    push('/')


  }

  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browsing list of react meetups to attend"
        ></meta>
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
  
  
}

export default NewMeetupPage;