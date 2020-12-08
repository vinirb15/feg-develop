import React, { useState } from 'react';

import './styles.css';

import CompanyImg from '../../../assets/Announcements/ScreenShot1.png'
import Loader from '../../Loader';

const Announcements: React.FC = () => {

    const [loaded, setLoaded] = useState<boolean>(true);

    return (
        <div className="company-announcements">
            <p>11.30.2020 - 3:45PM</p>
            <div className="content">
                <img style={{display: loaded ? "none" : "block"}} src={CompanyImg} onLoad={() => setLoaded(false)} alt="Announcement" />
                {
                    (loaded ? <Loader /> : <></>)
                }
                <h1>Good. Clean. Fun!</h1>
                <h2>Good afternoon everyone, as you all know this year has been a doozy.
                It's imperative that we as a whole are watching our spending by being overly cautious when ordering
                and utilizing any items you have in house.
                </h2>
            </div>
        </div>
    )
}

export default Announcements;
