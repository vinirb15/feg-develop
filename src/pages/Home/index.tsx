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
        "bipower",
        "erp",
        "feg",
        "old",
        "fegerp",
        "zendeskmanager",
        "managerzendesk",
        "knowledgebase",
        "baseknowledge",
        "createticket",
        "ticketcreate",
        "calendar",
        "forum",
        "fegbook",
        "paylocity",
        "locity",
        "company",
        "announcement",
        "company calendar",
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
        if (results === "" || options.find(tree => tree.startsWith(results)) === "feg") {
            return fullPage
        }
        if (options.find(tree => tree.startsWith(results)) === "powerbi" || options.find(tree => tree.startsWith(results)) === "bipower") {
            return (
                <Grid item lg={4} md={6} xs={12}>
                    <Power />
                </Grid>
            )
        }
        if (options.find(tree => tree.startsWith(results)) === "erp" || options.find(tree => tree.startsWith(results)) === "fegerp" || options.find(tree => tree.startsWith(results)) === "old") {
            return (
                <Grid item lg={4} md={6} xs={12}>
                    <Display />
                </Grid>
            )
        }
        if (options.find(tree => tree.startsWith(results)) === "zendeskmanager" || options.find(tree => tree.startsWith(results)) === "managerzendesk") {
            return (
                <Grid item lg={4} md={6} xs={12}>
                    <ZendeskManager />
                </Grid>

            )
        }
        if (options.find(tree => tree.startsWith(results)) === "knowledgebase" || options.find(tree => tree.startsWith(results)) === "baseknowledge") {
            return (
                <Grid item lg={4} md={6} xs={12}>
                    <Knowledge />
                </Grid>
            )
        }
        if (options.find(tree => tree.startsWith(results)) === "createticket" || options.find(tree => tree.startsWith(results)) === "ticketcreate") {
            return (
                <Grid item lg={4} md={6} xs={12}>
                    <CreateTicket />
                </Grid>
            )
        }
        if (options.find(tree => tree.startsWith(results)) === "calendar" || options.find(tree => tree.startsWith(results)) === "company calendar") {
            return (
                <Grid item lg={8} md={6} xs={12}>
                    <Calendar />
                </Grid>
            )
        }
        if (options.find(tree => tree.startsWith(results)) === "forum" || options.find(tree => tree.startsWith(results)) === "fegbook") {
            return (
                <Grid item lg={4} md={6} xs={12}>
                    <Forum />
                </Grid>
            )
        }
        if (options.find(tree => tree.startsWith(results)) === "paylocity" || options.find(tree => tree.startsWith(results)) === "locity") {
            return (
                <Grid item lg={4} md={6} xs={12}>
                    <Paylocity />
                </Grid>
            )
        }
        if (options.find(tree => tree.startsWith(results)) === "announcement") {
            return (
                <Grid item lg={4} md={6} xs={12}>
                    <CompanyAnnoun />
                </Grid>
            )
        }
        if (options.find(tree => tree.startsWith(results)) === "company") {
            return (<div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "1rem",
            }}>
                <Grid item lg={4} md={6} xs={12}>
                    <CompanyAnnoun />
                </Grid>

                <Grid item lg={4} md={6} xs={12}>
                    <Calendar />
                </Grid>
            </div>
            )
        }
        if (options.find(tree => tree.startsWith(results)) !== "") {
            return fullPage
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
