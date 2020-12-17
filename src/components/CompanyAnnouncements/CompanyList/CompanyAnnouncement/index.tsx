import React, { useState } from 'react';

import './styles.css';

import CompanyImg from '../../../../assets/Announcements/ScreenShot1.png'
import Loader from '../../../Loader';

const Announcements: React.FC = () => {

    const [loaded, setLoaded] = useState<boolean>(true);
    const [announcements, setAnnouncements] = useState(
        {
            id: "0",
            date: "11.30.2020 - 3:45PM",
            subject: "Good. Clean. Fun!",
            description: "Good afternoon everyone, as you all know this year has been a doozy. It's imperative that we as a whole are watching our spending by being overly cautious when ordering and utilizing any items you have in house",
            author: "Marlon Jordan"
        });

    // useEffect(() => {
    //     loadRequests()
    // }, []);

    // async function loadRequests() {
    //     await axios.get('/api/v1/accounts?status=INACTIVE&group=profile').then(response => {
    //         setAnnouncements(response.data.results);
    //         setLoaded(true)
    //     })
    // }

    return (
        <div className="company-announcement">
            <p>{announcements.date}</p>
            <div className="content">
                <img style={{ display: loaded ? "none" : "block" }} src={CompanyImg} onLoad={() => setLoaded(false)} alt="Announcement" />
                {
                    (loaded ? <Loader /> : <></>)
                }
                <p>Author: {announcements.author}</p>
                <h1>{announcements.subject}</h1>
                <h2>{announcements.description}</h2>
            </div>
        </div>
    )
}

export default Announcements;
