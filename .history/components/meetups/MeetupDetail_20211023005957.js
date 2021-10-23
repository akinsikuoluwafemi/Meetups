
const MeetupDetail = (props) => {
  

  return (
    <>
      <img
        src={props.img}
        alt="A first Meetup"
      />
      <h1>A first Meetup</h1>
      <address>Some Street 5, Some City</address>
      <p>The meetup description</p>
    </>
  );
}

export default MeetupDetail;