
const MeetupDetail = (props) => {
  

  return (
    <>
      <img src={props.img} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{ props.dec}</p>
    </>
  );
}

export default MeetupDetail;