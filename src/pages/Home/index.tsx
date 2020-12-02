import React, { useEffect } from 'react';

import './styles.css';

import axios from 'axios';

import { Grid } from '@material-ui/core'

import Header from '../../components/Header';
import Power from '../../components/Home/PowerBI';
import Display from '../../components/Home/ERP';
import ZendeskManager from '../../components/Home/Zendesk';
import Knowledge from '../../components/Home/Knowledge';
import CreateTicket from '../../components/Home/CreateTicket';
import CompanyAnnoun from '../../components/Home/CompanyAnnoun';

import SideBar from '../../components/SideBar';

const HomePage: React.FC = () => {


    useEffect(() => {
        handleLogin()
    }, [])

    async function handleLogin() {
        const id = localStorage.getItem('id')

        try {
            const response: any = await axios.get(`http://127.0.0.1:4200/api/v1/accounts/${id}`);
            console.log(response.data[0]);
            localStorage.setItem('firstName', response.data[0].firstName);
            localStorage.setItem('lastName', response.data[0].lastName);

        } catch (error) {
            console.log(error)
        }
    }

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
