import React, { useState, useEffect } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';

import './styles.css';

import axios from '../../../../services/axios';
import Loader from '../../../Loader';

const Announcements: React.FC = () => {

    const [loaded, setLoaded] = useState<boolean>(false);
    const [announcements, setAnnouncements] = useState(
        {
            id: "",
            owner_id: "",
            location_id: "",
            subject: "",
            info: "",
            url_image: "",
            createdAt: "",
            created_by: {
                id: "",
                location_id: "",
                profile_id: "",
                firstName: "",
                lastName: "",
                createdAt: "",
            }
        }
    );

    const history = useHistory();

    useEffect(() => {
        loadUsersValidate()
    });

    const match: any = useRouteMatch('/announcements/company/:id');
    const id: any = (match?.params?.id || '')

    async function loadUsersValidate() {
        try {
            await axios.get(`/api/v1/announcements/${id}`).then(response => {
                setAnnouncements(response.data.results);
                setLoaded(true)
            })
        } catch (error) {
            history.push(`/announcements`)
        }
    }

    return (
        <div className="company-announcement">
            <p>{announcements.createdAt.split('').splice(0, 10).join('')} {announcements.createdAt.split('').splice(11, 5).join('')}</p>
            <div className="content">
                <img style={{ display: loaded ? "none" : "block" }} src={announcements.url_image} onLoad={() => setLoaded(false)} alt="Announcement" />
                {
                    (loaded ? <Loader /> : <></>)
                }
                <p>Author: {announcements.created_by.firstName} {announcements.created_by.lastName}</p>
                <h1>{announcements.subject}</h1>
                <h2>{announcements.info}</h2>
            </div>
        </div>
    )
}

export default Announcements;
