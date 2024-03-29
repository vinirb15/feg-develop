import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { green, grey } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import axios from '../../services/axios';

import Select from 'react-select';
import { locationsData, groupsData } from '../../data';

import './styles.css';

const GreenCheckbox = withStyles({
    root: {
        color: grey[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props: CheckboxProps) => <Checkbox color="primary" {...props} />);

const NewAnnouncement: React.FC = () => {

    const [checked, setChecked] = useState(false);
    const [locationChecked, setLocationChecked] = useState(false);
    const [optEveryone, setOptEveryone] = useState(false);
    const [group, setGroup] = useState<any>([])
    const [location, setLocation] = useState<any>([])
    const [imageFile, setImageFile] = useState({})
    const [description, setDescription] = useState<string>()
    const [subject, setSubject] = useState<string>()
    const [confirmation, setConfirmation] = useState<boolean>(false)

    const history = useHistory();

    function handleChange() {
        if (checked === false) {
            setChecked(true)
        } else if (checked === true) {
            setChecked(false)
        }
    }

    function handleLocation() {
        if (locationChecked === false) {
            setLocationChecked(true)
        } else if (locationChecked === true) {
            setLocationChecked(false)
        }
    }

    function handleEveryone() {
        if (optEveryone === false) {
            setOptEveryone(true)
            setGroup([])
            setLocation([])
        } else if (optEveryone === true) {
            setOptEveryone(false)
        }
    }

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

    const handleSelectGroup = (event: any) => {
        setGroup(event)
    };

    const handleSelectLocation = (event: any) => {
        setLocation(event)
    };

    const id = localStorage.getItem('id');


    async function createAnnouncement() {
        if (group === "") {
            setGroup([])
        }
        if (location === "") {
            setLocation([])
        }
        
        const data = {
            groups_ids: group,
            owner_id: id,
            locations_ids: location,
            image: imageFile,
            subject: subject,
            info: description,
        }

        try {
            await axios.post(`/api/v1/announcements`, data)
            console.log(data)
            setConfirmation(false)
            alert("Announcement created")
            history.push(`/announcements`)
        } catch (error) {
            alert(error)
            history.push(`/announcements`)
        }
    }

    const groups = (
        <div className="specific-groups">

            <FormControlLabel
                control={
                    <GreenCheckbox
                        onChange={handleChange}
                        name="checkedG"
                    />}
                label="Specific Group"
                checked={checked ? true : false}
            />

            <Select
                isMulti
                name="colors"
                options={groupsData}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={handleSelectGroup}
            />
        </div>
    )

    const locations = (
        <div className="specific-groups">
            <FormControlLabel
                control={
                    <GreenCheckbox
                        onChange={handleLocation}
                        name="checkedA"
                    />}
                label="Specific Location"
                checked={locationChecked ? true : false}
            />

            <Select
                isMulti
                name="colors"
                options={locationsData}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={handleSelectLocation}
            />

        </div>
    )

    const myModal = (
        <div id="myModal" style={{ display: confirmation ? "block" : "none" }} className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <span onClick={() => setConfirmation(false)} className="close">&times;</span>
                    <h2>
                        Your announcement is about to be published.
                        When publishing an announcement all selected users will receive an email and will be able
                        to read the announcement on their pages.
                        Would you like to publish it now?
                    </h2>
                </div>
                <div className="modal-confirmation">
                    <form>
                        <button type="button" onClick={() => setConfirmation(false)} className="cancelbtn">No</button>
                        <button type="button" onClick={() => createAnnouncement()} className="deletebtn">Yes</button>
                    </form>
                </div>
            </div>
        </div>
    )

    return (
        <div className="new-announcement">
            <h1>FEG Announcement</h1>
            <div className="create-announcement">
                <FormControlLabel
                    control={
                        <GreenCheckbox
                            name="checkedG"
                            onChange={handleEveryone}
                        />}
                    label="Everyone"
                    disabled={checked || locationChecked ? true : false}
                />
                <FormControlLabel
                    control={
                        <GreenCheckbox
                            onChange={handleChange}
                            name="checkedG"
                        />}
                    label="Specific Group"
                    style={{ display: checked ? "none" : "block" }}
                    checked={checked ? true : false}
                    disabled={optEveryone ? true : false}
                />
                {
                    (checked ? groups : <></>)
                }
                <FormControlLabel
                    control={
                        <GreenCheckbox
                            onChange={handleLocation}
                            name="checkedA"
                        />}
                    label="Specific Location"
                    style={{ display: locationChecked ? "none" : "block" }}
                    checked={locationChecked ? true : false}
                    disabled={optEveryone ? true : false}
                />
                {
                    (locationChecked ? locations : <></>)
                }
            </div>
            <div className="utils">
                <h4>Subject</h4>
                <input
                    type="text"
                    name="nameInput"
                    value={subject}
                    maxLength={250}
                    onChange={e => setSubject(e.target.value)}
                />
                <h4>Picture</h4>
                <input
                    className="typefile"
                    type="file"
                    accept=".jpg,.png"
                    onChange={event => fileSelect(event.target.files)}
                />
                <p style={{ color: "#808080" }}>images less than 4 mb only</p>
                <h4>Announcement</h4>
                <textarea
                    value={description}
                    maxLength={4950}
                    onChange={e => setDescription(e.target.value)}
                />
            </div>
            <button onClick={() => setConfirmation(true)}>Publish</button>
            {
                myModal
            }
        </div>
    );
}

export default NewAnnouncement;