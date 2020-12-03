import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';

import Announcement from '../../../assets/Announcements/ScreenShot1.png'

const Content = () => {

const history = useHistory();

function handleRedirect(e: any){
    e.preventDefault()
    history.push('/announcements')
}

    return (
        <div className="company">
            <Link to="/">
                <h1>Company Announcements</h1>
            </Link>
            <p>11.30.2020 - 3:45PM</p>
            <div className="content">
            <img src={Announcement} alt="Announcement" />
            <h2 className="text">Good afternoon everyone, as you all know this year has been a doozy.
            It's imperative that we as a whole are watching our spending by being overly cautious when ordering
            and utilizing any items you have in house.
                </h2>
            <button onClick={handleRedirect}>See more...</button>
            </div>
        </div>
    );
}

export default Content;
