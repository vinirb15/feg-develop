import React, { useState, useEffect } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import Monograma from '../../../assets/Monograma.png'
import axios from '../../../services/axios';
import Loader from '../../Loader';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import './styles.css';

const Profile: React.FC = () => {

    const [loaded, setLoaded] = useState<boolean>(false)
    const [group, setGroup] = useState<string>('')
    const [requests, setRequests] = useState(
        {
            addresses: {
                full: "",
            },
            email: "",
            first_name: "",
            last_name: "",
            location_name: "",
            phone_number: "",
            url_image: "",
        }
    );

    useEffect(() => {
        loadUsersValidate()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const match: any = useRouteMatch('/user/:id');
    const id: any = (match?.params?.id || '')

    async function loadUsersValidate() {
        try {
            await axios.get(`/api/v1/accounts/${id}`).then(response => {
                setRequests(response.data.results);
                console.log(response.data.results);
                setLoaded(true)
            })
        } catch (error) {
            history.push(`/home/${userID}`)
        }
    }

    const userID = localStorage.getItem('id')

    async function activeUser() {
        const data = {
            group_id: group,
            status: "ACTIVE",
        }
        try {
            await axios.put(`/api/v1/accounts/${id}`, data)
            alert("User actived")
            history.push(`/user`)
        } catch (error) {
            history.push(`/user`)
        }
    }


    async function blockUser() {
        try {
            await axios.put(`/api/v1/accounts/${id}/blocker`)
            alert("User blocked")
            history.push(`/user`)
        } catch (error) {
            history.push(`/user`)
        }
    }

    const history = useHistory();

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setGroup(event.target.value as string)
    };

    return (
        (loaded ?
            <>
                <div className="user-validation">
                    <img src={requests.url_image} alt="FEG LOGO" />

                    <div className="description">
                        <h2>Name: <b>{requests.first_name}</b></h2>
                        <h2>Last Name: <b>{requests.last_name}</b></h2>
                        <h2>Email: <b>{requests.email}</b></h2>
                        <h2>Personal Address: <b>{requests.addresses.full}</b></h2>
                        <h2>Phone Number: <b>{requests.phone_number}</b></h2>
                        <h2>Main Location: <b>{requests.location_name}</b></h2>
                        <FormControl>
                            <InputLabel id="demo-simple-select-label">User Group:</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={group}
                                onChange={handleChange}
                            >
                                <MenuItem value={"fb006748-92f7-4756-8e55-a53764741e99"}>General Manager</MenuItem>
                                <MenuItem value={"6efcdeb0-0292-4a5f-bc5a-64078b5b9c49"}>Technical </MenuItem>
                                <MenuItem value={"008e07d7-ffa0-4461-8685-aed3c917deb3"}>Merchandise Office</MenuItem>
                                <MenuItem value={"c7229861-fef2-487a-b77f-8d86913078b3"}>Supervisor</MenuItem>
                                <MenuItem value={"cef0ac62-0cda-42cf-9472-a80a64f806dc"}>Assistant GMs</MenuItem>
                                <MenuItem value={"408ac245-fc8f-48e7-b5e8-f5ff5adca51f"}>Regional Director/VP</MenuItem>
                                <MenuItem value={"333d091e-5179-4470-b229-dfe97009d6c8"}>SVP</MenuItem>
                                <MenuItem value={"5c48e49d-4a8a-47ed-8e7f-bac2a4672036"}>Graphics Office</MenuItem>
                                <MenuItem value={"66817e9a-e53c-413a-b5a1-0985afdc95c0"}>Merchandise Manager</MenuItem>
                                <MenuItem value={"46a9135d-7617-495a-a477-b98d2685970d"}>Equipment Office</MenuItem>
                                <MenuItem value={"f455720f-b1d2-4fe9-9010-170c837535f3"}>Read Only (Partners)</MenuItem>
                                <MenuItem value={"60c9e68c-c351-414a-9021-441fe07bb5c4"}>Office </MenuItem>
                                <MenuItem value={"270c8457-837d-4a79-af4c-1005948b0e2e"}>Great Wolf Lodge</MenuItem>
                                <MenuItem value={"bbbfbf18-0ab7-4533-b63a-cdf41e91b201"}>Sacoa/Embed/CenterEdge</MenuItem>
                                <MenuItem value={"128e5e58-3c0a-4e63-9be1-d0b6fc2f871e"}>Super Admin</MenuItem>
                            </Select>
                        </FormControl>
                        <p>Select which group the user will belong within the system.</p>
                    </div>

                    <div className="actions">
                        <button style={{ background: "#25ab9f" }} onClick={activeUser}>Confirm User</button>
                        <button style={{ background: "#e0001b" }} onClick={blockUser}>Block User</button>
                    </div>

                </div>
            </>
            :
            <Loader />
        )
    )
}

export default Profile;
