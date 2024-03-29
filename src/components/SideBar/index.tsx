import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiUserCheck, FiUsers, FiPlusSquare, FiCalendar, FiBookOpen } from 'react-icons/fi';

import './styles.css';

import Monograma from '../../assets/Monograma.png';
import Loginbutton from '../LoginButton';

const SideBar = (props: any) => {
    return (
        <div className="sidebar">
            <img src={Monograma} alt="FEG LOGO" />
            <Link to={`/home/${localStorage.getItem('token')}`} className={props.home} title="Home"><FiHome size={20} /></Link>
            <Link to="/user" className={props.validate} title="Users Validations"><FiUserCheck size={20} /></Link>
            <Link to="/announcements" className={props.announcements} title="Company Announcements"><FiBookOpen size={20} /></Link>
            <Link to="/management" className={props.users} title="Users Management"><FiUsers size={20} /></Link>
            <Link to="/announcements/new" className={props.newAnnouncement} title="New Announcement"><FiPlusSquare size={20} /></Link>
            <Link to="/calendar" className={props.calendar} title="Company Calendar"><FiCalendar size={20} /></Link>
            <div id="config">
            <Loginbutton color="#f5f5f5" size={20} title="Configuration" width='100%'/>
            </div>
        </div>
    )
}

export default SideBar;
