import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';

import Loader from '../../Loader';
import axios from '../../../services/axios';

const Content = () => {

    const [loaded, setLoaded] = useState<boolean>(true);
    const [announcements, setAnnouncements] = useState(
        {
            id: "",
            subject: "",
            info: "",
            url_image: "",
            createdAt: "",
        }
    );

    useEffect(() => {
        loadUsersValidate()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function loadUsersValidate() {
        try {
            await axios.get(`/api/v1/announcements/last`).then(response => {
                setAnnouncements(response.data.results);
                console.log(response);
                setLoaded(true)
            })
        } catch (error) {
            // history.push(`/announcements`)
            alert(error)
        }
    }

    const history = useHistory();

    function handleRedirect(e: any) {
        e.preventDefault()
        history.push(`/announcements/company/${announcements.id}`)
    }

    return (
        <div className="company">
            <Link to="/announcements">
                <h1>Company Announcements</h1>
            </Link>
            <p>{announcements.createdAt.split('').splice(0, 10).join('')} {announcements.createdAt.split('').splice(11, 5).join('')}</p>
            <div className="content">
                <img style={{ display: loaded ? "none" : "block" }} src={announcements.url_image} onLoad={() => setLoaded(false)} alt="Announcement" />
                {
                    (loaded ? <Loader /> : <></>)
                }
                <h1>{announcements.subject}</h1>
                <h2 className="text">{announcements.info}</h2>
                <button onClick={handleRedirect}>See more...</button>
            </div>
        </div>
    );
}

export default Content;
