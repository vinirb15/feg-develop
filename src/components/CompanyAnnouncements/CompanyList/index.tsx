import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../../services/axios';

import './styles.css';

import Loader from '../../Loader';

const Announcements: React.FC = () => {

    const [loaded, setLoaded] = useState<boolean>(false);
    const [announcements, setAnnouncements] = useState([
        {
            id: "0",
            title: "Good afternoon everyone",
            date: "11.20.2020 - 4:25PM"
        },
        {
            id: "1",
            title: "Good afternoon everyone",
            date: "11.20.2020 - 4:25PM"
        }
    ]);

    // useEffect(() => {
    //     loadRequests()
    // }, []);

    // async function loadRequests() {
    //     await axios.get('/api/v1/accounts?status=INACTIVE&group=profile').then(response => {
    //         setAnnouncements(response.data.results);
    //         setLoaded(true)
    //     })
    // }
    // {requests.Employee.map(request => (
    //     <li key={request.id}>
    //         <h1><FiUser /> {request.email}<button onClick={() => handleValidate(request.id)}>Validate user</button></h1>
    //     </li>
    // ))}
    
    return (
        (
            loaded ? <Loader /> :
                <div className="company-announcements">
                    {announcements.map(request => (
                        <Link to={`/announcements/${request.id}`}>
                            <h1>{request.title}</h1>
                            <p>{request.date}</p>
                        </Link>
                    ))}
                </div>
        )
    )
}

export default Announcements;