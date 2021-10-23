import MeetupList from '../components/meetups/MeetupList';


const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup'
  }
]

export default function HomePage() {
  return (
    <MeetupList meetups={ }/>
  )
}
