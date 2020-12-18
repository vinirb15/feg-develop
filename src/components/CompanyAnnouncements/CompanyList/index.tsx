import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../../services/axios';

import './styles.css';

import Loader from '../../Loader';

const Announcements: React.FC = () => {

    const [loaded, setLoaded] = useState<boolean>(true);
    const [announcements, setAnnouncements] = useState([
        {
            id: "",
            owner_id: "",
            location_id: "",
            subject: "",
            info: "",
            url_image: "",
            createdAt: "",
            updatedAt: "",
            location_name: "",
            firstName: "",
            lastName: ""
        }
    ]);

    useEffect(() => {
        loadRequests()
    }, []);

    async function loadRequests() {
        await axios.get('api/v1/announcements').then(response => {
            setAnnouncements(response.data.results);
            setLoaded(false)
        })
    }

    return (
        (
            loaded ? <Loader /> :
                <div className="company-announcements">
                    {announcements.map(request => (
                        <Link to={`/announcements/company/${request.id}`}>
                            <h1>{request.subject}</h1>
                            <p>{request.createdAt.split('').splice(0, 10).join('')} {request.createdAt.split('').splice(11, 5).join('')}</p>
                            <p>author: {request.firstName} {request.lastName}</p>
                        </Link>
                    ))}
                </div>
        )
    )
}

export default Announcements;