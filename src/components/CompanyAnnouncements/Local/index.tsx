import React, { useState } from 'react';

import './styles.css';

import LocalImg from '../../../assets/Announcements/ScreenShot2.png'
import Loader from '../../Loader';

const Announcements: React.FC = () => {

    const [loaded, setLoaded] = useState<boolean>(true);

    return (
        <div className="local-announcements">
            <p>11.20.2020 - 4:25PM</p>
            <div className="content">
                <img style={{display: loaded ? "none" : "block"}} src={LocalImg} onLoad={() => setLoaded(false)} alt="Announcement" />
                {
                    (loaded ? <Loader /> : <></>)
                }
                <h2>Good afternoon everyone, as you all know this year has been a doozy.
                It's imperative that we as a whole are watching our spending by being overly cautious when ordering
                and utilizing any items you have in house.
                </h2>
            </div>
        </div>
    )
}

export default Announcements;
