import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FiUser } from 'react-icons/fi'
import Loader from '../Loader'

import axios from 'axios';

import './styles.css';

const Register = () => {
    const [loaded, setLoaded] = useState<boolean>(false)
    const [requests, setRequests] = useState(
        {
            Employee: [{
                id: "",
                firstName: "",
                lastName: "",
                location_name: "",
                location_id: "",
                email: "",
                group_name: "",
            }],
            Partner: [{
                id: "",
                firstName: "",
                lastName: "",
                location_name: "",
                location_id: "",
                email: "",
                group_name: "",
            }]
        }
    );

    const history = useHistory();

    useEffect(() => {
        loadRequests()
    }, []);

    async function loadRequests() {
        await axios.get('https://api-systemfegllc.herokuapp.com/api/v1accounts?status=INACTIVE&group=profile').then(response => {
            setRequests(response.data.results);
            setLoaded(true)
        })
    }

    function handleValidate(id: string) {
        history.push(`/user/${id}`);
    }

    return (

        (
            loaded ?
                <div className="requests-container">

                    <div className="thiscontent">

                        <h3>FEG Employees</h3>
                        {
                            requests.Employee ?
                                <ul>
                                    {requests.Employee.map(request => (
                                        <li key={request.id}>
                                            <h1><FiUser /> {request.email}<button onClick={() => handleValidate(request.id)}>Validate user</button></h1>
                                        </li>
                                    ))}
                                </ul>
                                :
                                <h1>0 Employee to confirm</h1>
                        }

                        <h3>FEG Partners</h3>
                        {
                            requests.Partner ?
                                <ul>
                                    {requests.Partner.map(request => (
                                        <li key={request.id}>
                                            <h1><FiUser /> {request.email}<button onClick={() => handleValidate(request.id)}>Validate user</button></h1>
                                        </li>
                                    ))}
                                </ul>
                                :
                                <h1>0 Partner to confirm</h1>
                        }

                    </div>

                </div>
                :
                <Loader />
        )

    );
}

export default Register;
