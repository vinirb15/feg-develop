import React from 'react';

import Management from '../../components/UsersManagement';
import SideBar from '../../components/SideBar';
import Header from '../../components/Header';

const UsersManagement: React.FC = () => {


    return (
        <>
            <SideBar users="active" />
            <Header />
            <Management />
        </>
    )
}

export default UsersManagement;
