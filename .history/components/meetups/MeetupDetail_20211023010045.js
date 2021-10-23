
const MeetupDetail = (props) => {
  

  return (
    <>
      <img src={props.img} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{ props.ad}</address>
      <p>The meetup description</p>
    </>
  );
}

export default MeetupDetail;