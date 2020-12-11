import React, { useState, useEffect } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import Monograma from '../../../assets/Monograma.png'
import axios from 'axios';
import Loader from '../../Loader';

import './styles.css';

const Profile: React.FC = () => {

    const [loaded, setLoaded] = useState<boolean>(false)
    const [requests, setRequests] = useState(
        {
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
            await axios.get(`http://localhost:4200/api/v1/accounts/${id}`).then(response => {
                setRequests(response.data);
                setLoaded(true)
            })
        } catch (error) {
            history.push(`/home/${userID}`)
        }
    }

    const userID = localStorage.getItem('id')

    async function activeUser() {
        try {
            await axios.put(`http://localhost:4200/api/v1/accounts/${id}/activer`)
            alert("User actived")
            history.push(`/user`)
        } catch (error) {
            history.push(`/user`)
        }
    }


    async function blockUser() {
        try {
            await axios.put(`http://localhost:4200/api/v1/accounts/${id}/blocker`)
            alert("User blocked")
            history.push(`/user`)
        } catch (error) {
            history.push(`/user`)
        }
    }

    const history = useHistory();


    return (
        (loaded ?
            <>
                <div className="user-validation">
                    <img src={Monograma} alt="FEG LOGO" />

                    <div className="description">
                        <h2>First Name <b>{requests.firstName}</b></h2>
                        <h2>Last Name <b>{requests.lastName}</b></h2>
                        <h2>Email <b>{requests.email}</b></h2>
                        <h2>Personal Address <b>{requests.email}</b></h2>
                        <h2>Phone Number <b>{requests.email}</b></h2>
                        <h2>Main Location <b>{requests.email}</b></h2>
                        <h2>Position <b>{requests.email}</b></h2>
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
