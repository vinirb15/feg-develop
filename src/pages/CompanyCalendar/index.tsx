import React from 'react';

import SideBar from '../../components/SideBar';
import Header from '../../components/Header';
import Calendar from '../../components/CompanyCalendar';


const CompanyCalendar: React.FC = () => {


    return (
        <>
            <SideBar calendar="active" />
            <Header />
            <Calendar />
        </>
    )
}

export default CompanyCalendar;
