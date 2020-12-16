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
                city: "",
                createdAt: "",
                full: "",
                id: "",
                number: "",
                owner_id: "",
                state: "",
                street: "",
            },
            company_name: "",
            createdAt: "",
            email: "",
            firstName: "",
            group_id: '',
            id: "",
            ip: "",
            isActive: "",
            lastName: "",
            location_id: "",
            phone_number: "",
            password: "",
            profile_id: "",
            status: "",
        }
    );

    useEffect(() => {
        loadUsersValidate()
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
        try {
            await axios.put(`/api/v1/accounts/${id}/activer`)
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
                    <img src={Monograma} alt="FEG LOGO" />

                    <div className="description">
                        <h2>Name: <b>{requests.firstName}</b></h2>
                        <h2>Last Name: <b>{requests.lastName}</b></h2>
                        <h2>Email: <b>{requests.email}</b></h2>
                        <h2>Personal Address: <b>{requests.addresses.full}</b></h2>
                        <h2>Phone Number: <b>{requests.phone_number}</b></h2>
                        <h2>Main Location: <b>{requests.company_name}</b></h2>
                        <FormControl>
                            <InputLabel id="demo-simple-select-label">User Group:</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={group}
                                onChange={handleChange}
                            >
                                <MenuItem value={1}>General Manager</MenuItem>
                                <MenuItem value={2}>Technical </MenuItem>
                                <MenuItem value={3}>Merchandise Office</MenuItem>
                                <MenuItem value={4}>Supervisor</MenuItem>
                                <MenuItem value={5}>Assistant GMs</MenuItem>
                                <MenuItem value={6}>Regional Director/VP</MenuItem>
                                <MenuItem value={7}>SVP</MenuItem>
                                <MenuItem value={8}>Graphics Office</MenuItem>
                                <MenuItem value={9}>Merchandise Manager</MenuItem>
                                <MenuItem value={10}>Equipment Office</MenuItem>
                                <MenuItem value={11}>Read Only (Partners)</MenuItem>
                                <MenuItem value={12}>Office </MenuItem>
                                <MenuItem value={13}>Great Wolf Lodge</MenuItem>
                                <MenuItem value={14}>Sacoa/Embed/CenterEdge</MenuItem>
                                <MenuItem value={15}>Super Admin</MenuItem>
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
