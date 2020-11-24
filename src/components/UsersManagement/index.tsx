import React from 'react';
import { FiFilePlus, FiEdit, FiTrash, FiToggleLeft } from 'react-icons/fi';

import Image from '../../assets/Monograma.png';

import './styles.css';

const Management = () => {

    return (
        <div className="management-content">

            <div className="management-top">

                <div className="top-left">
                    <h1>Users <b>480 total</b></h1>
                    <input type="text" placeholder="Search..." />
                </div>

                <div className="top-right">
                    <button>Add User</button>
                    <button>
                        <FiFilePlus size={25} />
                    </button>
                </div>
            </div>



            <div className="users-management">
                <div className="list-header">
                    <h2>User Management</h2>
                    <div>
                        <select name="">
                            <option value="">Export</option>
                            <option value="">Option</option>
                            <option value="">Option</option>
                            <option value="">Option</option>
                        </select>
                        <button>New Record</button>
                    </div>
                </div>

                <table className="users">
                    <tr>
                        <th>ID</th>
                        <th>USER</th>
                        <th>LOCATION</th>
                        <th>EMAIL</th>
                        <th>GROUP</th>
                        <th>STATUS</th>
                        <th>ACTIONS</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td><img src={Image} alt="user.png" /> Alfreds Futterkiste</td>
                        <td>Germany</td>
                        <td>alfredsfutterkiste@gmail.com</td>
                        <td>Group Here</td>
                        <td><b style={{background: '#808080'}}>Inactive</b></td>
                        <td>
                            <button><FiToggleLeft color='#808080' /></button>
                            <button><FiEdit color='#808080' /></button>
                            <button><FiTrash color='#808080' /></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td><img src={Image} alt="user.png" /> Alfreds Futterkiste</td>
                        <td>Germany</td>
                        <td>alfredsfutterkiste@gmail.com</td>
                        <td>Group Here</td>
                        <td><b style={{background: '#25ab9f'}}>Active</b></td>
                        <td>
                            <button><FiToggleLeft color='#808080' /></button>
                            <button><FiEdit color='#808080' /></button>
                            <button><FiTrash color='#808080' /></button>
                        </td>
                    </tr>
                </table>
            </div>

        </div>
    );
}

export default Management;