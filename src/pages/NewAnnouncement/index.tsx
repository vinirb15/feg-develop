import React from 'react';

import SideBar from '../../components/SideBar';
import Header from '../../components/Header';
import Announcement from '../../components/NewAnnouncement';


const NewAnnouncement: React.FC = () => {


    return (
        <>
            <SideBar newAnnouncement="active" />
            <Header />
            <Announcement />
        </>
    )
}

export default NewAnnouncement;
