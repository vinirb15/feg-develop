import React, { useState, useEffect } from 'react';
import { FiEdit, FiTrash, FiToggleLeft } from 'react-icons/fi';
import axios from '../../services/axios';
import {saveAs} from 'file-saver'

import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import './styles.css';
import Loader from '../../components/Loader';

const Management = () => {
    const [users, setUsers] = useState([
        {
            company_name: "",
            createdAt: "",
            email: "",
            first_name: "",
            full_name: "",
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
            updatedAt: "",
            url_image: "",
        }
    ]);

    const [loading, setLoading] = useState<boolean>(true)
    const [modal, setModal] = useState(false)
    const [confirmation, setConfirmation] = useState(false)
    const [switchConfirmation, setSwitchConfirmation] = useState(false)
    const [modalDate, setModalDate] = useState<any>()
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [group, setGroup] = useState('');
    const [total, setTotal] = useState('');

    useEffect(() => {
        handleLoad()
    }, [])

    async function handleLoad() {
        const response: any = await axios.get(`/api/v1/accounts`)
        setUsers(response.data.results)
        console.log(response.data)
        setTotal(response.data.size)
        setLoading(false)
    }

    async function handleDeleteUser(id: string) {
        try {
            await axios.put(`/api/v1/accounts/${id}/blocker`);
            // await axios.delete(`/api/v1/accounts/${id}`)
            setUsers(users.filter(user => user.id !== id));
            setConfirmation(false)
            alert('User deleted')
        } catch (error) {
            alert('Error')
        }
    }

    async function exportCSV(e: any) {
        fetch(`https://api-systemfegllc.herokuapp.com/api/v1/accounts/export/${e}`, {
            method: 'GET',
        }).then(function (response) {
            return response.blob();
        }
        )
            .then(function (blob) {
                saveAs(blob, `export.${e}`);
            })
            .catch(error => {
                alert(error)
            })
    }

    async function handleUpdate(id: string) {
        if (firstName === "") {
            setFirstName(modalDate.first_name)
        }
        if (lastName === "") {
            setLastName(modalDate.last_name)
        }
        if (email === "") {
            setEmail(modalDate.email)
        }
        if (location === "") {
            setLocation(modalDate.location_id)
        }
        if (group === "") {
            setGroup(modalDate.group_id)
        }

        else if (group !== "" && location !== "" && email !== "" && firstName !== "" && lastName !== "") {
            const data = {
                "first_name": firstName,
                "last_name": lastName,
                "email": email,
                "location_id": location,
                "group_id": group,
            }
            try {
                await axios.put(`/api/v1/accounts/${id}`, data);
                alert(`User updated`);
                setLoading(true)
                handleLoad()
                setModal(false)
            } catch (error) {
                alert('Error updating user');
            }
        }
    }

    async function handleActived(actived: any, id: string) {
        if (actived === true) {
            try {
                await axios.put(`/api/v1/accounts/${id}/inactivate`);

                alert(`User inactivated`);
            } catch (error) {
                alert('Error inactivating user');
            }
            setLoading(true)
            handleLoad()
        } else {
            try {
                await axios.put(`/api/v1/accounts/${id}/activer`);

                alert(`User activated`);
                setLoading(true)
                handleLoad()
            } catch (error) {
                alert('Error activating user');
            }
        }
    }

    // async function handleSearchUser(value: string) {
    //     try {
    //         const response: any = await axios.get(`/api/v1/accounts/${value}`)
    //         setUsers(response.data.results)
    //     } catch (error) {
    //         alert('Error')
    //         console.log(error)
    //     }
    // }


    function parser(actived: string) {
        if (actived === "ACTIVE") {
            return true
        }
        else if (actived === "INACTIVE") {
            return false
        }
    }

    const handleChangeGroup = (event: React.ChangeEvent<{ value: unknown }>) => {
        setGroup(event.target.value as string)
        console.log(event.target.value as string)
    };

    const handleChangeLocation = (event: React.ChangeEvent<{ value: unknown }>) => {
        setLocation(event.target.value as string)
        console.log(event.target.value as string)
    };

    const table = (
        <div className="management-content">

            <div className="management-top">

                <div className="top-left">
                    <h1>Users<b> {total} total</b></h1>
                </div>
            </div>

            <div className="users-management">
                <div className="list-header">
                    {/* <TextField
                        id="standard-basic"
                        label="Search..."
                        onChange={e => handleSearchUser(e.target.value)}
                    /> */}
                    <h2>User Management</h2>
                    <div className="export">
                        <select onChange={e => exportCSV(e.target.value)} name="">
                            <option value="">Export</option>
                            <option value="csv">CSV</option>
                            <option value="excel">Excel</option>
                            {/* <option value="">Print</option> */}
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
                                    <img src={user.url_image} alt="user.png" />
                                </td>
                                <td><p className="label-mobile">USER:</p> {user.first_name} {user.lastName}</td>
                                <td><p className="label-mobile">LOCATION:</p> {user.location_name}</td>
                                <td><p className="label-mobile">EMAIL:</p> {user.email}</td>
                                <td><p className="label-mobile">GROUP:</p> {user.group_name}</td>
                                <td><p className="label-mobile">STATUS:</p> <b style={{ background: parser(user.status) ? "#25ab9f" : "#808080" }}>{parser(user.status) ? 'ACTIVATED' : 'DISABLED'}</b></td>
                                <td>
                                    {/* <button><FiToggleLeft onClick={() => handleActived(parser(user.status), user.id)} color='#808080' /></button> */}
                                    <button><FiToggleLeft onClick={() => { setSwitchConfirmation(true); setModalDate(user) }} color='#808080' /></button>
                                    <button onClick={() => { setModal(true); setModalDate(user) }} ><FiEdit color='#808080' /></button>
                                    <button><FiTrash onClick={() => { setConfirmation(true); setModalDate(user.id); console.log(user) }} color='#808080' /></button>
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
                                <TextField
                                    id="standard-basic"
                                    label="First Name:"
                                    placeholder={modalDate ? modalDate.first_name : ""}
                                    onChange={e => setFirstName(e.target.value)}
                                />
                                <TextField
                                    id="standard-basic"
                                    label="Last Name:"
                                    placeholder={modalDate ? modalDate.last_name : ""}
                                    onChange={e => setLastName(e.target.value)}
                                />
                                <FormControl required>
                                    <InputLabel id="demo-simple-select-label">Select Location</InputLabel>
                                    <Select
                                        id="demo-simple-select-required"
                                        value={location}
                                        onChange={handleChangeLocation}>
                                        <MenuItem value={"d70bbfdb-829f-4800-a17a-e6d872cfb280"}>Rain Waterpark </MenuItem>
                                        <MenuItem value={"78898734-f305-4892-b89e-e5ea4e06eccb"}>Kalahari Sandusky </MenuItem>
                                        <MenuItem value={"fdcdd096-34cf-44ef-b479-a8791670fdb7"}>Kalahari Dells - BGR </MenuItem>
                                        <MenuItem value={"347134a9-0035-4135-8455-405274fe2cde"}>Kalahari Dells - ITP </MenuItem>
                                        <MenuItem value={"fff705e0-0bcd-4bce-927f-edc8e68e565d"}>Country Springs </MenuItem>
                                        <MenuItem value={"23bf2f53-c5fa-4ea2-a8d2-513f6c57877f"}>Zehnders </MenuItem>
                                        <MenuItem value={"8fda4f4d-7c8c-4544-8f74-ae7fd03cb036"}>Castaway Bay </MenuItem>
                                        <MenuItem value={"aea7aed2-a174-44cc-83a8-a3b4fbd21a58"}>Camelback Resort </MenuItem>
                                        <MenuItem value={"fc7bd9b4-b71c-4f39-917b-6d7fdc779ff3"}>Kalahari - Poconos </MenuItem>
                                        <MenuItem value={"bfb6b0c7-6bb4-47db-be47-8766adc85e88"}>Swings N Things </MenuItem>
                                        <MenuItem value={"83107167-8a56-4646-b05f-e64a2619fb6a"}>Sawgrass Mills Gameroom </MenuItem>
                                        <MenuItem value={"c4033a3e-c296-47bf-8b3f-025c5cb4d696"}>Hollywood Park </MenuItem>
                                        <MenuItem value={"b840348e-cca1-4d88-bc46-5b39ffa59d55"}>Freedom Station </MenuItem>
                                        <MenuItem value={"b86afad0-e3e7-487c-932a-fad0ebbafe3f"}>Going Bonkers Columbia </MenuItem>
                                        <MenuItem value={"c5b99a6a-d0f2-447d-8217-60016313c2df"}>Going Bonkers - Quincy </MenuItem>
                                        <MenuItem value={"7ae32fc7-2e46-43df-8628-8a1758765f24"}>Going Bonkers - Topeka </MenuItem>
                                        <MenuItem value={"ce70da3a-c0d7-448b-b8d4-b6e361ed4f33"}>The Grove </MenuItem>
                                        <MenuItem value={"9799cee8-5315-4d53-93f9-bb025a62fbb9"}>Kartrite </MenuItem>
                                        <MenuItem value={"cc772abb-33b3-4719-a3a4-477c1b23206c"}>Timber Ridge </MenuItem>
                                        <MenuItem value={"b7b15473-9ba0-4e6d-84c3-2d30f90ca6d6"}>In The Game Peabody </MenuItem>
                                        <MenuItem value={"469c0a91-9f65-42f5-a19a-7dbc8ad595a1"}>Johnny Rockets </MenuItem>
                                        <MenuItem value={"e28df6a1-10b6-4f6b-a78a-df47c3604b55"}>Grand Sierra </MenuItem>
                                        <MenuItem value={"8b46c53b-de45-4964-89a2-640e8887d041"}>Walthers </MenuItem>
                                        <MenuItem value={"e615ccfc-026d-49bf-9de1-c11c40454930"}>Grand Traverse Resort </MenuItem>
                                        <MenuItem value={"33f7b7d7-9e39-4ba5-ab9e-f55276f64ef7"}>Cedar Point </MenuItem>
                                        <MenuItem value={"04da96a0-5801-4aa2-b812-c8815d4105b1"}>Breakers Hotel </MenuItem>
                                        <MenuItem value={"4fd32427-6371-4b23-9717-fae51c94cb8c"}>Kalahari Round Rock </MenuItem>
                                        <MenuItem value={"b5c7c21b-e74d-49da-a253-130587d7f134"}>In the Game - ICON Park </MenuItem>
                                        <MenuItem value={"4298650a-fdaf-4192-8fa1-30996c41b7be"}>FEG Office - Ohio </MenuItem>
                                        <MenuItem value={"93334557-a92e-4eb3-a295-79a8a203f40e"}>FEG Illinois Office </MenuItem>
                                        <MenuItem value={"960e3d67-5756-423f-9ffe-f55de0e4057c"}>Great Wolf Lodge - Concord </MenuItem>
                                        <MenuItem value={"41dff3f1-c4f0-47a5-a483-81b89b66e4ce"}>Great Wolf Lodge - Grand Mound </MenuItem>
                                        <MenuItem value={"951067df-6bea-463e-9ef7-d2cfefe00061"}>Great Wolf Lodge - Grapevine </MenuItem>
                                        <MenuItem value={"4b6460b8-ce09-40eb-9346-662306926b2a"}>Great Wolf Lodge - Kansas City </MenuItem>
                                        <MenuItem value={"17812261-87f5-4fa7-9459-5192ee20844d"}>Great Wolf Lodge - Mason </MenuItem>
                                        <MenuItem value={"440b1553-c642-4b37-9dd3-81aa5188f680"}>Great Wolf Lodge - Poconos </MenuItem>
                                        <MenuItem value={"4a2d5450-84d3-4d68-8fdd-a019266c4760"}>Great Wolf Lodge - Sandusky </MenuItem>
                                        <MenuItem value={"142bba35-c12d-4656-9797-a98ecf597b33"}>Great Wolf Lodge - Traverse City </MenuItem>
                                        <MenuItem value={"5731fbfe-462c-4f8b-8754-c24fc56694a8"}>Great Wolf Lodge - Williamsburg </MenuItem>
                                        <MenuItem value={"268072bc-64c6-45de-bef5-9ea5518a43bb"}>Great Wolf Lodge - Wisconsin Dells </MenuItem>
                                        <MenuItem value={"ba580dea-ecc2-4fed-a88c-6281f72d458f"}>Knuckleheads </MenuItem>
                                        <MenuItem value={"57edf6d0-4500-4af2-99fc-43f6ecf981b6"}>Waldameer Park </MenuItem>
                                        <MenuItem value={"fcf7c8dd-b0ca-450a-be00-42e6e75f4935"}>Great Wolf Lodge - New England </MenuItem>
                                        <MenuItem value={"c97b3ccf-ce65-4ef3-8dcc-75d09951c8b7"}>Great Wolf Lodge - Garden Grove </MenuItem>
                                        <MenuItem value={"096853d6-b0cc-45a4-9d20-72494667f638"}>Great Wolf Lodge - Colorado Springs </MenuItem>
                                        <MenuItem value={"2fab773c-4488-424f-8da7-78cbe888f514"}>Great Wolf Lodge - Bloomington </MenuItem>
                                        <MenuItem value={"a1471991-f064-4473-b400-a571b1c78dcb"}>Great Wolf Lodge - LaGrange </MenuItem>
                                        <MenuItem value={"2a7bf72d-f863-411a-bd1d-961839df06e7"}>Great Wolf Lodge - Gurnee </MenuItem>
                                        <MenuItem value={"f3ea17b9-1037-4ce4-949b-2c19187accf7"}>Great Wolf Lodge - Scottsdale </MenuItem>
                                        <MenuItem value={"b9b60cf3-e295-42e1-8488-19f50127b367"}>Great Wolf Lodge - M </MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField
                                    id="standard-basic"
                                    type="email"
                                    label="Email:"
                                    placeholder={modalDate ? modalDate.email : ""}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <FormControl required>
                                    <InputLabel id="demo-simple-select-label">Select Group</InputLabel>
                                    <Select
                                        id="demo-simple-select-required"
                                        value={group}
                                        onChange={handleChangeGroup}>
                                        <MenuItem value={'fb006748-92f7-4756-8e55-a53764741e99'}>General Manager</MenuItem>
                                        <MenuItem value={'6efcdeb0-0292-4a5f-bc5a-64078b5b9c49'}>Technical </MenuItem>
                                        <MenuItem value={'008e07d7-ffa0-4461-8685-aed3c917deb3'}>Merchandise Office</MenuItem>
                                        <MenuItem value={'c7229861-fef2-487a-b77f-8d86913078b3'}>Supervisor</MenuItem>
                                        <MenuItem value={'cef0ac62-0cda-42cf-9472-a80a64f806dc'}>Assistant GMs</MenuItem>
                                        <MenuItem value={'408ac245-fc8f-48e7-b5e8-f5ff5adca51f'}>Regional Director/VP</MenuItem>
                                        <MenuItem value={'333d091e-5179-4470-b229-dfe97009d6c8'}>SVP</MenuItem>
                                        <MenuItem value={'5c48e49d-4a8a-47ed-8e7f-bac2a4672036'}>Graphics Office</MenuItem>
                                        <MenuItem value={'66817e9a-e53c-413a-b5a1-0985afdc95c0'}>Merchandise Manager</MenuItem>
                                        <MenuItem value={'46a9135d-7617-495a-a477-b98d2685970d'}>Equipment Office</MenuItem>
                                        <MenuItem value={'f455720f-b1d2-4fe9-9010-170c837535f3'}>Read Only (Partners)</MenuItem>
                                        <MenuItem value={'60c9e68c-c351-414a-9021-441fe07bb5c4'}>Office </MenuItem>
                                        <MenuItem value={'270c8457-837d-4a79-af4c-1005948b0e2e'}>Great Wolf Lodge</MenuItem>
                                        <MenuItem value={'bbbfbf18-0ab7-4533-b63a-cdf41e91b201'}>Sacoa/Embed/CenterEdge</MenuItem>
                                        <MenuItem value={'128e5e58-3c0a-4e63-9be1-d0b6fc2f871e'}>Super Admin</MenuItem>
                                    </Select>
                                </FormControl>

                                <button className="button" onClick={() => handleUpdate(modalDate.id)} type="button">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div id="myModal" style={{ display: confirmation ? "block" : "none" }} className="modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* <span onClick={() => setConfirmation(false)} className="close">&times;</span> */}
                            <h2>The user will be blocked from the system and his information will be deleted. Do you want to proceed?</h2>
                        </div>
                        <div className="modal-confirmation">
                            <form>
                                <button type="button" onClick={() => setConfirmation(false)} className="cancelbtn">No</button>
                                <button type="button" onClick={() => handleDeleteUser(modalDate)} className="deletebtn">Yes</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div id="myModal" style={{ display: switchConfirmation ? "block" : "none" }} className="modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* <span onClick={() => setSwitchConfirmation(false)} className="close">&times;</span> */}
                            <h2>Are you sure you want to activate/disable the user?</h2>
                        </div>
                        <div className="modal-confirmation">
                            <form>
                                <button type="button" onClick={() => { setSwitchConfirmation(false); console.log(modalDate) }} className="cancelbtn">No</button>
                                <button type="button" onClick={() => { handleActived(parser(modalDate.status), modalDate.id); setSwitchConfirmation(false) }} className="deletebtn">Yes</button>
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