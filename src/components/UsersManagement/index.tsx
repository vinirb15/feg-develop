import React, { useState, useEffect } from 'react';
import { FiEdit, FiTrash, FiToggleLeft } from 'react-icons/fi';
import axios from 'axios';

import Image from '../../assets/Monograma.png';

import './styles.css';


const Management = () => {
    const [users, setUsers] = useState([
        {
            id: "",
            firstName: "",
            lastName: "",
            location_name: "",
            email: "",
            group_name: "",
            isActive: false
        }
    ]);

    useEffect(() => {
        handleLoad()
    }, [])

    async function handleLoad() {
        const response: any = await axios.get(`https://api-systemfegllc.herokuapp.com/api/v1/accounts`)
        setUsers(response.data)
    }


    const [modal, setModal] = useState(false)
    const [confirmation, setConfirmation] = useState(false)
    const [modalDate, setModalDate] = useState<any>()

    async function handleDeleteUser(id: string) {
        try {
            await axios.delete(`https://api-systemfegllc.herokuapp.com/api/v1/accounts/${id}`)
            setUsers(users.filter(user => user.id !== id));
            setConfirmation(false)
        } catch (error) {
            alert('Error')
        }
    }

    return (
        <div className="management-content">

            <div className="management-top">

                <div className="top-left">
                    <h1>Users<b> 480 total</b></h1>
                    <input type="text" placeholder="Search..." />
                </div>

                {/* <div className="top-right">
                    <button>Add User</button>
                    <button>
                        <FiFilePlus size={25} />
                    </button>
                </div> */}
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


                    {users.map(user => (
                        <tr key={user.id}>
                            <td id="image">
                                <img src={Image} alt="user.png" />
                            </td>
                            <td><p className="label-mobile">USER:</p> {user.firstName} {user.lastName}</td>
                            <td><p className="label-mobile">LOCATION:</p> {user.location_name}</td>
                            <td><p className="label-mobile">EMAIL:</p> {user.email}</td>
                            <td><p className="label-mobile">GROUP:</p> {user.group_name}</td>
                            <td><p className="label-mobile">STATUS:</p> <b style={{ background: user.isActive ? "#25ab9f" : "#808080" }}>{user.isActive ? 'ACTIVED' : 'INATIVED'}</b></td>
                            <td>
                                <button><FiToggleLeft color='#808080' /></button>
                                <button onClick={() => setModal(true)} ><FiEdit color='#808080' /></button>
                                <button><FiTrash onClick={() => { setConfirmation(true); setModalDate(user.id) }} color='#808080' /></button>
                            </td>
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
                                                placeholder={user.firstName + user.lastName}
                                            // value={user.EMAIL}
                                            // onChange={e => setName(e.target.value)}
                                            />
                                            <h2>Location:</h2>
                                            <input
                                                type="text"
                                                placeholder={user.location_name}
                                            // value={user.EMAIL}
                                            // onChange={e => setName(e.target.value)}
                                            />
                                            <h2>Email:</h2>
                                            <input
                                                type="email"
                                                placeholder={user.email}
                                            // value={user.EMAIL}
                                            // onChange={e => setEmail(e.target.value)}
                                            />
                                            <h2>Group:</h2>
                                            <input
                                                type="text"
                                                placeholder={user.group_name}
                                            // value={user.EMAIL}
                                            // onChange={e => setName(e.target.value)}
                                            />

                                            <button className="button" type="submit">Update</button>
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
                        </tr>
                    ))}
                </table>
            </div>

        </div>
    );
}

export default Management;