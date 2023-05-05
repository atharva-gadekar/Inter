import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Event from '../components/Event';
import moment from 'moment';


export default function Events() {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  useEffect(() => {
    // Fetch upcoming events
    axios.get('https://inter-api-8q0x.onrender.com/events/upcoming')
      .then(response => {
        setUpcomingEvents(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    // Fetch past events
    axios.get('https://inter-api-8q0x.onrender.com/events/past')
      .then(response => {
        setPastEvents(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className='px-20 py-6'>
        <div className=''>
          <div className="flex items-center space-x-6">
            <h3 className="text-3xl font-bold text-black ">Upcoming Events</h3>
            <hr className='w-[620px] border-gray-300'/>
          </div>
          
            {upcomingEvents.map(event => (
              <Event key={event.id} date={event.date}  name={event.title} description={event.description} image={event.url} url={event.eventUrl} />
            ))}
        
        </div>
       
        <div>
          <div className="flex items-center space-x-6 mt-16">
            <h3 className="text-3xl font-bold text-black ">Past Events</h3>
            <hr className='w-[700px] border-gray-300'/>
          </div>

          <div className="bg-white rounded-3xl shadow-md w-[56rem]">
            {pastEvents.map(event => (
              <Event key={event.id} date={event.date} name={event.title} description={event.description} image={event.url} />
            ))}
          </div>

        

        </div>
      </div>
    </>
  )
}
