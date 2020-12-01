import React, { useState } from 'react';
import { FiMail, FiFile } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';


import './styles.css';

import Monograma from '../../../assets/Monograma.png';

const ProfileInfo = () => {

    const [update, setUpdate] = useState(false);

    const history = useHistory()

    function fileSelect(props: any) {
        console.log(props)
    }

    const updateOn = (
        <>
            <hr />
            <div className="update-options">
                <h4>Name</h4>
                <input
                    type="text"
                    name="nameInput"
                />

                <h4>Picture</h4>
                <input
                    className="profile-typefile"
                    type="file"
                    accept="image/*"
                    onChange={fileSelect} />

                <button>Save</button>

            </div>
        </>
    )

    function updateBtn() {
        if (update === false)
            setUpdate(true)
        else {
            setUpdate(false)
        }
    }


    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="profile-box">
            <img src={Monograma} alt="FEG LOGO" />
            <div className="about">
                <h2>Lisa Price</h2>
                <div className="container">
                    <FiMail color="#478fc8" size={20} />
                    <p>lisa.price@fegllc.com</p>
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
                    <h3>My Profile</h3>
                    <div className="update-profile">
                        <h4>Account settings and more</h4>
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
