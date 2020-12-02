import React, { useState } from 'react';
import { FiEdit, FiTrash, FiToggleLeft } from 'react-icons/fi';

import Image from '../../assets/Monograma.png';

import './styles.css';

const Management = () => {
    const [users, setUsers] = useState([
        {
            ID: "1",
            USER: "Alfreds Futterkiste",
            LOCATION: "Germany",
            EMAIL: "alfredsfutterkiste@gmail.com",
            GROUP: "FEG",
            ACTIVED: false
        },
        {
            ID: "2",
            USER: "Futterkiste Alfreds",
            LOCATION: "Germany",
            EMAIL: "futterkistealfreds@gmail.com",
            GROUP: "FEG",
            ACTIVED: true
        }
    ]);

    const [modal, setModal] = useState(false)
    const [confirmation, setConfirmation] = useState(false)

    function handleDeleteUser(event: string) {
        try {
            setUsers(users.filter(user => user.ID !== event));
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


                    {
                        users.map(user => (
                            <tr key={user.ID}>
                                <td id="image">
                                    <img src={Image} alt="user.png" />
                                </td>
                                <td><p className="label-mobile">USER:</p> {user.USER}</td>
                                <td><p className="label-mobile">LOCATION:</p> {user.LOCATION}</td>
                                <td><p className="label-mobile">EMAIL:</p> {user.EMAIL}</td>
                                <td><p className="label-mobile">GROUP:</p> {user.GROUP}</td>
                                <td><p className="label-mobile">STATUS:</p> <b style={{ background: user.ACTIVED ? "#25ab9f" : "#808080" }}>{user.ACTIVED ? 'ACTIVED' : 'INATIVED'}</b></td>
                                <td>
                                    <button><FiToggleLeft color='#808080' /></button>
                                    <button onClick={() => setModal(true)} ><FiEdit color='#808080' /></button>
                                    <button><FiTrash onClick={() => setConfirmation(true)} color='#808080' /></button>
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
                                                    placeholder={user.USER}
                                                // value={user.EMAIL}
                                                // onChange={e => setName(e.target.value)}
                                                />
                                                <h2>Location:</h2>
                                                <input
                                                    type="text"
                                                    placeholder={user.LOCATION}
                                                // value={user.EMAIL}
                                                // onChange={e => setName(e.target.value)}
                                                />
                                                <h2>Email:</h2>
                                                <input
                                                    type="email"
                                                    placeholder={user.EMAIL}
                                                // value={user.EMAIL}
                                                // onChange={e => setEmail(e.target.value)}
                                                />
                                                <h2>Group:</h2>
                                                <input
                                                    type="text"
                                                    placeholder={user.GROUP}
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
                                            <form onSubmit={() => handleDeleteUser}>
                                                <button type="button" onClick={() => setConfirmation(false)} className="cancelbtn">Cancel</button>
                                                <button type="button" onClick={() => handleDeleteUser(user.ID)} className="deletebtn">Delete</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>



                            </tr>
                        ))
                    }
                </table>
            </div>

        </div>
    );
}

export default Management;