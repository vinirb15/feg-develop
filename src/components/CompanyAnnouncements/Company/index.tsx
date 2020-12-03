import React from 'react';

import './styles.css';

import CompanyImg from '../../../assets/Announcements/ScreenShot1.png'

const Announcements: React.FC = () => {

    return (
        <div className="company-announcements">
            <p>11.30.2020 - 3:45PM</p>
            <div className="content">
                <img src={CompanyImg} alt="Announcement" />
                <h2>Good afternoon everyone, as you all know this year has been a doozy.
                It's imperative that we as a whole are watching our spending by being overly cautious when ordering
                and utilizing any items you have in house.
                </h2>
            </div>
        </div>
    )
}

export default Announcements;
