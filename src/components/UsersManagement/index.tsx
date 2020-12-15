import React, { useState, useEffect } from 'react';
import { FiEdit, FiTrash, FiToggleLeft } from 'react-icons/fi';
import axios from 'axios';

import Image from '../../assets/Monograma.png';

import './styles.css';
import Loader from '../../components/Loader';

const Management = () => {
    const [users, setUsers] = useState([
        {
            company_name: "",
            createdAt: "",
            email: "",
            firstName: "",
            group_id: "",
            group_name: "",
            id: "",
            ip: "",
            lastName: "",
            location_id: "",
            location_name: "",
            password: "",
            phone_number: "",
            profile_id: "",
            status: "",
        }
    ]);

    const [loading, setLoading] = useState<boolean>(true)
    const [modal, setModal] = useState(false)
    const [confirmation, setConfirmation] = useState(false)
    const [modalDate, setModalDate] = useState<any>()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [group, setGroup] = useState('');
    const [total, setTotal] = useState('');


    // while (users === undefined) {
    //     setLoading(true)
    // }

    useEffect(() => {
        handleLoad()
    }, [])

    async function handleLoad() {
        const response: any = await axios.get(`https://api-systemfegllc.herokuapp.com/api/v1/accounts`)
        setUsers(response.data.results)
        console.log(response.data)
        setTotal(response.data.size)
        setLoading(false)
    }

    async function handleDeleteUser(id: string) {
        try {
            await axios.put(`https://api-systemfegllc.herokuapp.com/api/v1/accounts/${id}/blocker`);
            // await axios.delete(`https://api-systemfegllc.herokuapp.com/api/v1/accounts/${id}`)
            // setUsers(users.filter(user => user.id !== id));
            setConfirmation(false)
        } catch (error) {
            alert('Error')
        }
    }

    async function handleUpdate(id: string) {
        if (name === "") {
            setName(modalDate.firstName)
        }
        if (email === "") {
            setEmail(modalDate.email)
        }
        if (location === "") {
            setLocation(modalDate.location_id)
        }
        if (group === "") {
            setGroup(modalDate.group_name)
        }

        else if (group !== "" && location !== "" && email !== "" && name !== "") {
            const data = {
                "firstName": name,
                "email": email,
                "location_id": location,
                // "group_name": group,
            }
            try {
                await axios.put(`https://api-systemfegllc.herokuapp.com/api/v1/accounts/${id}`, data);
                alert(`User updated`);
                setLoading(true)
                setModal(false)
                handleLoad()
            } catch (error) {
                alert('Error updating user');
            }
        }
    }

    async function handleActived(actived: any, id: string) {
        if (actived === true) {
            try {
                await axios.put(`https://api-systemfegllc.herokuapp.com/api/v1/accounts/${id}/blocker`);

                alert(`User blocked`);
            } catch (error) {
                alert('Error blocking user');
            }
            setLoading(true)
            handleLoad()
        } else {
            try {
                await axios.put(`https://api-systemfegllc.herokuapp.com/api/v1/accounts/${id}/activer`);

                alert(`User activated`);
                setLoading(true)
                handleLoad()
            } catch (error) {
                alert('Error activating user');
            }
        }
    }


    function parser(actived: string) {
        if (actived === "ACTIVE") {
            return true
        }
        else if (actived === "INACTIVE") {
            return false
        }
    }



    const table = (
        <div className="management-content">

            <div className="management-top">

                <div className="top-left">
                    <h1>Users<b> {total} total</b></h1>
                </div>
            </div>

            <div className="users-management">
                <div className="list-header">
                    <h2>User Management</h2>
                    <div className="export">
                        <select name="">
                            <option value="">Export</option>
                            <option value="">CSV</option>
                            <option value="">Excel</option>
                            <option value="">Print</option>
                        </select>
                        {/* <button>New Record</button> */}
                    </div>
                </div>

                <table className="users">
                    <tr>
                        <th id="image"></th>
                        <th>USER</th>
                        <th>LOCATION</th>
                        <th>EMAIL</th>
                        <th>GROUP</th>
                        <th>STATUS</th>
                        <th>ACTIONS</th>
                    </tr>


                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td id="image">
                                    <img src={Image} alt="user.png" />
                                </td>
                                <td><p className="label-mobile">USER:</p> {user.firstName} {user.lastName}</td>
                                <td><p className="label-mobile">LOCATION:</p> {user.location_name}</td>
                                <td><p className="label-mobile">EMAIL:</p> {user.email}</td>
                                <td><p className="label-mobile">GROUP:</p> {user.group_name}</td>
                                <td><p className="label-mobile">STATUS:</p> <b style={{ background: parser(user.status) ? "#25ab9f" : "#808080" }}>{parser(user.status) ? 'ACTIVED' : 'INATIVED'}</b></td>
                                <td>
                                    <button><FiToggleLeft onClick={() => handleActived(parser(user.status), user.id)} color='#808080' /></button>
                                    <button onClick={() => { setModal(true); setModalDate(user) }} ><FiEdit color='#808080' /></button>
                                    <button><FiTrash onClick={() => { setConfirmation(true); setModalDate(user.id) }} color='#808080' /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div id="myModal" style={{ display: modal ? "block" : "none" }} className="modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <span onClick={() => setModal(false)} className="close">&times;</span>
                            <h2>Update User</h2>
                        </div>
                        <div className="modal-content">
                            <form onSubmit={() => handleDeleteUser}>
                                <h2>Name:</h2>
                                <input
                                    type="text"
                                    placeholder={modalDate ? modalDate.firstName : ""}
                                    onChange={e => setName(e.target.value)}
                                />
                                <h2>Location:</h2>
                                <div className="export">
                                    <select onChange={e => setLocation(e.target.value)}>
                                        <option value={modalDate ? modalDate.location_id : ""}>{modalDate ? modalDate.location_name : ""}</option>
                                        <option value="Location 01">Location 01</option>
                                        <option value="Location 02">Location 02</option>
                                        <option value="Location 03">Location 03</option>
                                    </select>
                                </div>
                                <h2>Email:</h2>
                                <input
                                    type="email"
                                    placeholder={modalDate ? modalDate.email : ""}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <h2>Group:</h2>
                                <div className="export">
                                    <select onChange={e => setGroup(e.target.value)}>
                                        <option value={modalDate ? modalDate.group_name : ""}>{modalDate ? modalDate.group_name : ""}</option>
                                        <option value="Group 01">Group 01</option>
                                        <option value="Group 02">Group 02</option>
                                        <option value="Group 03">Group 03</option>
                                    </select>
                                </div>

                                <button className="button" onClick={() => handleUpdate(modalDate.id)} type="button">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div id="myModal" style={{ display: confirmation ? "block" : "none" }} className="modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <span onClick={() => setConfirmation(false)} className="close">&times;</span>
                            <h2>Are you sure you want to continue?</h2>
                        </div>
                        <div className="modal-confirmation">
                            <form>
                                <button type="button" onClick={() => setConfirmation(false)} className="cancelbtn">Cancel</button>
                                <button type="button" onClick={() => handleDeleteUser(modalDate)} className="deletebtn">Delete</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

    return (
        loading ? <Loader /> : table
    )

}

export default Management;