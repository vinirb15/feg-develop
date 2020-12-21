import React, { useState } from 'react';

import './styles.css';

import { Grid } from '@material-ui/core'

import Header from '../../components/Header';
import Power from '../../components/Home/PowerBI';
import Display from '../../components/Home/ERP';
import ZendeskManager from '../../components/Home/Zendesk';
import Knowledge from '../../components/Home/Knowledge';
import CreateTicket from '../../components/Home/CreateTicket';
import CompanyAnnoun from '../../components/Home/CompanyAnnoun';
import Forum from '../../components/Home/Forum';
import Paylocity from '../../components/Home/Paylocity';
import Calendar from '../../components/Home/Calendar';

import SideBar from '../../components/SideBar';

const HomePage: React.FC = () => {
    const [results, setResults] = useState("");
    const options = [
        "powerbi",
        "erp",
        "feg",
        "zendeskmanager",
        "knowledge",
        "createticket",
        "calendar",
        "forum",
        "paylocity",
        "companyannoun",
    ]

    const fullPage = (
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
                <Calendar />
            </Grid>

            <Grid item lg={4} md={6} xs={12}>
                <Forum />
            </Grid>

            <Grid item lg={4} md={6} xs={12}>
                <Paylocity />
            </Grid>

            <Grid item lg={4} md={6} xs={12}>
                <CompanyAnnoun />
            </Grid>
        </Grid>
    )


    function searchIn() {
        if (results === "") {
            return fullPage
        }
        if (options.find(tree => tree.startsWith(results)) === "powerbi") {
            return (
                <div style={{ width: "50%" }}>
                    <Power />
                </div>
            )
        }
        if (options.find(tree => tree.startsWith(results)) === "erp") {
            return (
                <div style={{ width: "50%" }}>
                    <Display />
                </div>
            )
        }
        if (options.find(tree => tree.startsWith(results)) === "zendeskmanager") {
            return (
                <div style={{ width: "50%" }}>
                    <ZendeskManager />
                </div>
            )
        }
        if (options.find(tree => tree.startsWith(results)) === "knowledge") {
            return (
                <div style={{ width: "50%" }}>
                    <Knowledge />
                </div>
            )
        }
        if (options.find(tree => tree.startsWith(results)) === "createticket") {
            return (
                <div style={{ width: "50%" }}>
                    <CreateTicket />
                </div>
            )
        }
        if (options.find(tree => tree.startsWith(results)) === "calendar") {
            return (
                <div style={{ width: "50%" }}>
                    <Calendar />
                </div>
            )
        }
        if (options.find(tree => tree.startsWith(results)) === "forum") {
            return (
                <div style={{ width: "50%" }}>
                    <Forum />
                </div>
            )
        }
        if (options.find(tree => tree.startsWith(results)) === "paylocity") {
            return (
                <div style={{ width: "50%" }}>
                    <Paylocity />
                </div>
            )
        }
        if (options.find(tree => tree.startsWith(results)) === "companyannoun") {
            return (
                <div style={{ width: "50%" }}>
                    <CompanyAnnoun />
                </div>
            )
        }
    }

    function onSearching(e: string) {
        setResults(e.toLowerCase())
    }

    return (
        <>
            <SideBar home="active" />
            <Header timeout="1000" />

            <div className="HomeContent">
                <div className="full">
                    <div className="search">
                        <input type="text" name="search" placeholder="Search.." onChange={e => onSearching(e.target.value)} />
                    </div>
                    {
                        searchIn()
                    }
                </div>

            </div >
        </>
    );
}

export default HomePage;
