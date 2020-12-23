import React, { useState } from 'react';
import { FiMail, FiFile } from 'react-icons/fi';
import axios from '../../../services/axios';
import './styles.css';

import Monograma from '../../../assets/Monograma.png';

const ProfileInfo = () => {
    const image = localStorage.getItem('image_url')
    const [update, setUpdate] = useState(false);
    const [updateFirstName, setUpdateFirstName] = useState(false);
    const [updateLastName, setUpdateLastName] = useState(false);
    const [updatePicture, setPicture] = useState(false);
    const [name, setName] = useState('')
    const [nameLast, setNameLast] = useState('')
    const [imageFile, setImageFile] = useState({})

    const firstName = localStorage.getItem('firstName')
    const lastName = localStorage.getItem('lastName')
    const userID = localStorage.getItem('id')
    const email = localStorage.getItem('email')

    function fileSelect(props: any) {
        console.log('imageset', props[0])
        const reader = new FileReader()
        reader.readAsDataURL(props[0])

        reader.onload = (e: any) => {
            console.log('imageset', props[0].type)

            setImageFile({
                selectedFile: e?.target?.result,
                type: props[0].type
            })
        }
    }

    function updateBtn() {
        if (update === false)
            setUpdate(true)
        else {
            setUpdate(false)
        }
    }

    function showFirstName() {
        if (updateFirstName === false)
            setUpdateFirstName(true)
        else {
            setUpdateFirstName(false)
        }
    }

    function showLastName() {
        if (updateLastName === false)
            setUpdateLastName(true)
        else {
            setUpdateLastName(false)
        }
    }

    function showPicture() {
        if (updatePicture === false)
            setPicture(true)
        else {
            setPicture(false)
        }
    }

    function handleLogout() {
        localStorage.clear();
        alert('Disconnected User')
        window.location.href = "https://account.systemfeg.com"
    }

    async function handleUpdate(id: string) {
        if (name === "") {
            setName(firstName!)
        }

        else if (nameLast === "") {
            setNameLast(lastName!)
        }

        else if (name !== "" && nameLast !== "") {
            const data = {
                firstName: name,
                lastName: nameLast,
                image: imageFile,
            }
            try {
                await axios.put(`/api/v1/accounts/${id}`, data);
                alert(`Your name will be updated at an upcoming login`);
            } catch (error) {
                alert('Error updating user');
            }
        }
    }

    const changeFirstName = (
        <>
            {/* <h4>Name</h4> */}
            <input
                type="text"
                name="nameInput"
                placeholder='New First Name'
                onChange={e => setName(e.target.value)}
            />
        </>
    )

    const changeLastName = (
        <>
            {/* <h4>Name</h4> */}
            <input
                type="text"
                name="nameInput"
                placeholder='New Last Name'
                onChange={e => setNameLast(e.target.value)}
            />
        </>
    )

    const changePicture = (
        <>
            {/* <h4>Name</h4> */}
            <input
                className="profile-typefile"
                type="file"
                accept="image/*"
                onChange={event => fileSelect(event.target.files)}
            />
        </>
    )

    const updateOn = (
        <>
            <hr />
            <div className="update-options">
                <h4>First Name</h4>
                <div className="options">
                    <p>{firstName}</p>
                    <button className="button" onClick={showFirstName}>edit</button>
                    {
                        (updateFirstName ? changeFirstName : <></>)
                    }
                </div>

                <h4>Last Name</h4>
                <div className="options">
                    <p>{lastName}</p>
                    <button className="button" onClick={showLastName}>edit</button>
                    {
                        (updateLastName ? changeLastName : <></>)
                    }
                </div>

                <h4>Picture</h4>
                <div className="options">
                    <img src={image ? image : Monograma} alt="FEG LOGO" />
                    <button className="button" onClick={showPicture}>edit</button>
                    {
                        (updatePicture ? changePicture : <></>)
                    }
                </div>

                <button className="save" onClick={() => handleUpdate(userID!)}>Save</button>

            </div>
        </>
    )

    return (
        <div className="profile-box">
            <img src={image ? image : Monograma} alt="FEG LOGO" />
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
                        <button className="button" onClick={updateBtn}>edit</button>
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
