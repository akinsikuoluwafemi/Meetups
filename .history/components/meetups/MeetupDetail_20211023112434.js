import classes from './MeetupDetail.module.css';



const MeetupDetail = (props) => {
  

  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.decription}</p>
    </section>
  );
}

export async function getStaticProps () {
    // fetch data for a single meetup
  return {
    props: {
      meetupData: {
          image: ''
        }
      }
    }
}
 

export default MeetupDetail;