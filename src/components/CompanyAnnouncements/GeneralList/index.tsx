import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../../services/axios';
import { FiTrash } from 'react-icons/fi';

import './styles.css';

import Loader from '../../Loader';

const Announcements: React.FC = () => {

    const [loaded, setLoaded] = useState<boolean>(true);
    const [modalDate, setModalDate] = useState<any>()
    const [confirmation, setConfirmation] = useState(false)

    const [announcements, setAnnouncements] = useState([
        {
            id: "",
            owner_id: "",
            location_id: "",
            subject: "",
            info: "",
            url_image: "",
            createdAt: "",
            updatedAt: "",
            location_name: "",
            full_name: ""
        }
    ]);

    useEffect(() => {
        loadRequests()
    }, []);

    async function loadRequests() {
        await axios.get('api/v1/announcements/companies').then(response => {
            setAnnouncements(response.data.results);
            console.log(response.data.results);
            setLoaded(false)
        })
    }

    async function handleDeleteUser(id: string) {
        try {
            await axios.delete(`/api/v1/announcements/${id}`)
            setAnnouncements(announcements.filter(e => e.id !== id));
            setConfirmation(false)
            alert('Announcement deleted')
        } catch (error) {
            alert('Error')
        }
    }

    return (
        (
            loaded ? <Loader /> :
                <div className="company-announcements">
                    {
                        announcements[0] ?
                            (
                                announcements.map(request => (
                                    <>
                                        <div className="announcement-options">
                                            <Link to={`/announcements/company/${request.id}`}>
                                                <h1>{request.subject}</h1>
                                            </Link>
                                            <button><FiTrash onClick={() => { setConfirmation(true); setModalDate(request.id); console.log(request) }} color='#808080' size={20} /></button>
                                        </div>
                                        <p>{request.createdAt.split('').splice(0, 10).join('')} {request.createdAt.split('').splice(11, 5).join('')}</p>
                                        <p>author: <b>{request.full_name}</b></p>
                                    </>
                                ))
                            )
                            :
                            <h1>No General results</h1>
                    }
                    <div id="myModal" style={{ display: confirmation ? "block" : "none" }} className="modal">
                        <div className="modal-content">
                            <div className="modal-header">
                                <span onClick={() => setConfirmation(false)} className="close">&times;</span>
                                <h2>Are you sure you would like to remove this announcement?
                                <br />
                                The announcement will be deleted for all users and it cannot be recovered.
                                <br />
                                The automatic emails generated at the time of the
                                announcement creation will still exist.
                                </h2>
                            </div>
                            <div className="modal-confirmation">
                                <form>
                                    <button type="button" onClick={() => setConfirmation(false)} className="cancelbtn">No</button>
                                    <button type="button" onClick={() => handleDeleteUser(modalDate)} className="deletebtn">Yes</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        )
    )
}

export default Announcements;