import React from 'react';

import './styles.css';

import { Grid } from '@material-ui/core'

import Header from '../../components/Header';
import Power from '../../components/Home/PowerBI';
import Display from '../../components/Home/ERP';
import ZendeskManager from '../../components/Home/Zendesk';
import Knowledge from '../../components/Home/Knowledge';
import CreateTicket from '../../components/Home/CreateTicket';
import CompanyAnnoun from '../../components/Home/CompanyAnnoun';
import SearchBox from '../../components/SearchBox';

import SideBar from '../../components/SideBar';

//925
const HomePage: React.FC = () => {

    return (
        <>
            <SideBar home="active" />

            <div className="full">
                <div className="search">
                    <input type="text" name="search" placeholder="Search.." />
                </div>
                <Header />

                <div className="HomeContent">
                    <Grid container spacing={3}>
                        <Grid item lg={4} md={6} xs={12}>
                            <Power />
                        </Grid>

                        <Grid item lg={4} md={6} xs={12}>
                            <Display />
                        </Grid>

                        <Grid item lg={4} md={6} xs={12}>
                            <ZendeskManager />
                        </Grid>

                        <Grid item lg={4} md={6} xs={12}>
                            <Knowledge />
                        </Grid>

                        <Grid item lg={4} md={6} xs={12}>
                            <CreateTicket />
                        </Grid>

                        <Grid item lg={4} md={6} xs={12}>
                            <CompanyAnnoun />
                        </Grid>
                    </Grid>
                </div>

            </div >
        </>
    );
}

export default HomePage;
