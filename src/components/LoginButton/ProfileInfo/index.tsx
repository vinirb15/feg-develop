import React, { useState } from 'react';
import { FiMail, FiFile } from 'react-icons/fi';
import axios from 'axios';
import './styles.css';

import Monograma from '../../../assets/Monograma.png';

const ProfileInfo = () => {

    const [update, setUpdate] = useState(false);
    const [name, setName] = useState('')

    const firstName = localStorage.getItem('firstName')
    const lastName = localStorage.getItem('lastName')
    const userID = localStorage.getItem('id')
    const email = localStorage.getItem('email')

    function fileSelect(props: any) {
        console.log(props)
    }

    function updateBtn() {
        if (update === false)
            setUpdate(true)
        else {
            setUpdate(false)
        }
    }


    function handleLogout() {
        localStorage.clear();
        alert('Disconnected User')
        window.location.href = "https://account.systemfeg.com"
    }

    async function handleUpdate(id: string) {
        if (name === "") {
            setName(firstName ? firstName : "")
        }

        else if (name !== "") {
            const data = {
                "firstName": name,
            }
            try {
                await axios.put(`https://api-systemfegllc.herokuapp.com/api/v1/accounts/${id}`, data);
                alert(`Your name will be updated at an upcoming login`);
            } catch (error) {
                alert('Error updating user');
            }
        }
    }

    const updateOn = (
        <>
            <hr />
            <div className="update-options">
                <h4>Name</h4>
                <input
                    type="text"
                    name="nameInput"
                    placeholder='New Name'
                    onChange={e => setName(e.target.value)}
                />

                <h4>Picture</h4>
                <input
                    className="profile-typefile"
                    type="file"
                    accept="image/*"
                    onChange={fileSelect}
                />

                <button onClick={() => handleUpdate(userID!)}>Save</button>

            </div>
        </>
    )

    return (
        <div className="profile-box">
            <img src={Monograma} alt="FEG LOGO" />
            <div className="about">
                <h2>{firstName} {lastName}</h2>
                <div className="container">
                    <FiMail color="#478fc8" size={20} />
                    <p>{email}</p>
                </div>
                <button onClick={handleLogout}>Sign Out</button>
            </div>

            <hr />

            <div className="my-profile">
                <FiFile style={{
                    background: '#c8c8d3',
                    borderRadius: '8px',
                    padding: '0.7rem',
                    color: '#1eb6b0'
                }} size={45} />
                <div className="container">
                    <h3>{firstName} {lastName}</h3>
                    <div className="update-profile">
                        <h4>Update your settings</h4>
                        <button onClick={updateBtn}>update</button>
                    </div>
                </div>
            </div>
            {
                (update ? updateOn : <></>)
            }

        </div>

    )
}

export default ProfileInfo;
