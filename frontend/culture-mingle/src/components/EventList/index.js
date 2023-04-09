import React, { useDispatch, useState, useEffect } from 'react';
import EventComponent from './EventComponent';
import axios from 'axios';

function EventList({ events }) {
    return (
        <div>
            {events && events.map(item => (
                <EventComponent key={item.id} event={item} />
            ))}
        </div>
    )
}
export default EventList 