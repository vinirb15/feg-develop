import React from 'react';

import './styles.css';

import LocalImg from '../../../assets/Announcements/ScreenShot2.png'

const Announcements: React.FC = () => {

    return (
        <div className="local-announcements">
            <p>11.20.2020 - 4:25PM</p>
            <div className="content">
                <img src={LocalImg} alt="Announcement" />
                <h2>Good afternoon everyone, as you all know this year has been a doozy.
                It's imperative that we as a whole are watching our spending by being overly cautious when ordering
                and utilizing any items you have in house.
                </h2>
            </div>
        </div>
    )
}

export default Announcements;
