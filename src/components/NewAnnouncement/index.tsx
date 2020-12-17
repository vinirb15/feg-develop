import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { green, grey } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
// import axios from 'axios';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
    const [group, setGroup] = useState('')
    const [location, setLocation] = useState('')
    const [imageFile, setImageFile] = useState()
    const [description, setDescription] = useState<string>()
    const [subject, setSubject] = useState<string>()

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

    function fileSelect(props: any) {
        console.log(props)
        setImageFile(props)
    }

    const handleSelectGroup = (event: React.ChangeEvent<{ value: unknown }>) => {
        setGroup(event.target.value as string)
    };

    const handleSelectLocation = (event: React.ChangeEvent<{ value: unknown }>) => {
        setLocation(event.target.value as string)
    };

    async function activeUser() {
        const data = {
            group: group,
            location: location,
            subject: subject,
            image: imageFile,
            description: description,
        }
        try {
            // await axios.post(`/api/v1/announcement`, data)
            console.log(data)
            alert("Announcement created")
            history.push(`/announcements`)
        } catch (error) {
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

            <FormControl>
                <InputLabel id="demo-simple-select-label">Groups</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={group}
                    onChange={handleSelectGroup}
                >
                    <MenuItem value={"fb006748-92f7-4756-8e55-a53764741e99"}>General Manager</MenuItem>
                    <MenuItem value={"6efcdeb0-0292-4a5f-bc5a-64078b5b9c49"}>Technical </MenuItem>
                    <MenuItem value={"008e07d7-ffa0-4461-8685-aed3c917deb3"}>Merchandise Office</MenuItem>
                    <MenuItem value={"c7229861-fef2-487a-b77f-8d86913078b3"}>Supervisor</MenuItem>
                    <MenuItem value={"cef0ac62-0cda-42cf-9472-a80a64f806dc"}>Assistant GMs</MenuItem>
                    <MenuItem value={"408ac245-fc8f-48e7-b5e8-f5ff5adca51f"}>Regional Director/VP</MenuItem>
                    <MenuItem value={"333d091e-5179-4470-b229-dfe97009d6c8"}>SVP</MenuItem>
                    <MenuItem value={"5c48e49d-4a8a-47ed-8e7f-bac2a4672036"}>Graphics Office</MenuItem>
                    <MenuItem value={"66817e9a-e53c-413a-b5a1-0985afdc95c0"}>Merchandise Manager</MenuItem>
                    <MenuItem value={"46a9135d-7617-495a-a477-b98d2685970d"}>Equipment Office</MenuItem>
                    <MenuItem value={"f455720f-b1d2-4fe9-9010-170c837535f3"}>Read Only (Partners)</MenuItem>
                    <MenuItem value={"60c9e68c-c351-414a-9021-441fe07bb5c4"}>Office </MenuItem>
                    <MenuItem value={"270c8457-837d-4a79-af4c-1005948b0e2e"}>Great Wolf Lodge</MenuItem>
                    <MenuItem value={"bbbfbf18-0ab7-4533-b63a-cdf41e91b201"}>Sacoa/Embed/CenterEdge</MenuItem>
                    <MenuItem value={"128e5e58-3c0a-4e63-9be1-d0b6fc2f871e"}>Super Admin</MenuItem>
                </Select>
            </FormControl>

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


            <FormControl>
                <InputLabel id="demo-simple-select-label">Location</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={location}
                    onChange={handleSelectLocation}
                >
                    <MenuItem value={1}>Rain Waterpark</MenuItem>
                    <MenuItem value={2}>Kalahari Sandusky</MenuItem>
                    <MenuItem value={3}>Kalahari Dells - BGR</MenuItem>
                    <MenuItem value={4}>Kalahari Dells - ITP</MenuItem>
                    <MenuItem value={5}>Country Springs</MenuItem>
                    <MenuItem value={6}>Zehnders</MenuItem>
                    <MenuItem value={7}>Castaway Bay</MenuItem>
                    <MenuItem value={8}>Camelback Resort</MenuItem>
                    <MenuItem value={9}>Kalahari - Poconos</MenuItem>
                    <MenuItem value={10}>Swings N Things</MenuItem>
                    <MenuItem value={11}>Sawgrass Mills Gameroom</MenuItem>
                    <MenuItem value={12}>Hollywood Park</MenuItem>
                    <MenuItem value={13}>Freedom Station</MenuItem>
                    <MenuItem value={14}>Going Bonkers Columbia</MenuItem>
                    <MenuItem value={15}>Going Bonkers - Quincy</MenuItem>
                    <MenuItem value={16}>Going Bonkers - Topeka</MenuItem>
                    <MenuItem value={17}>The Grove</MenuItem>
                    <MenuItem value={18}>Kartrite</MenuItem>
                    <MenuItem value={19}>Timber Ridge</MenuItem>
                    <MenuItem value={20}>In The Game Peabody</MenuItem>
                    <MenuItem value={21}>Johnny Rockets</MenuItem>
                    <MenuItem value={22}>Grand Sierra</MenuItem>
                    <MenuItem value={23}>Walthers</MenuItem>
                    <MenuItem value={24}>Grand Traverse Resort</MenuItem>
                    <MenuItem value={25}>Cedar Point</MenuItem>
                    <MenuItem value={26}>Breakers Hotel</MenuItem>
                    <MenuItem value={27}>Kalahari Round Rock</MenuItem>
                    <MenuItem value={28}>In the Game - ICON Park</MenuItem>
                    <MenuItem value={29}>FEG Office - Ohio</MenuItem>
                    <MenuItem value={30}>FEG Illinois Office</MenuItem>
                    <MenuItem value={31}>Great Wolf Lodge - Concord</MenuItem>
                    <MenuItem value={32}>Great Wolf Lodge - Grand Mound</MenuItem>
                    <MenuItem value={33}>Great Wolf Lodge - Grapevine</MenuItem>
                    <MenuItem value={34}>Great Wolf Lodge - Kansas City</MenuItem>
                    <MenuItem value={35}>Great Wolf Lodge - Mason</MenuItem>
                    <MenuItem value={36}>Great Wolf Lodge - Poconos</MenuItem>
                    <MenuItem value={37}>Great Wolf Lodge - Sandusky</MenuItem>
                    <MenuItem value={38}>Great Wolf Lodge - Traverse City</MenuItem>
                    <MenuItem value={39}>Great Wolf Lodge - Williamsburg</MenuItem>
                    <MenuItem value={40}>Great Wolf Lodge - Wisconsin Dells</MenuItem>
                    <MenuItem value={41}>Knuckleheads</MenuItem>
                    <MenuItem value={42}>Waldameer Park</MenuItem>
                    <MenuItem value={43}>Great Wolf Lodge - New England</MenuItem>
                    <MenuItem value={44}>Great Wolf Lodge - Garden Grove</MenuItem>
                    <MenuItem value={45}>Great Wolf Lodge - Colorado Springs</MenuItem>
                    <MenuItem value={46}>Great Wolf Lodge - Bloomington</MenuItem>
                    <MenuItem value={47}>Great Wolf Lodge - LaGrange</MenuItem>
                    <MenuItem value={48}>Great Wolf Lodge - Gurnee</MenuItem>
                    <MenuItem value={49}>Great Wolf Lodge - Scottsdale</MenuItem>
                    <MenuItem value={50}>Great Wolf Lodge - Manteca</MenuItem>
                    <MenuItem value={51}>Merchandise Office</MenuItem>
                    <MenuItem value={52}>Funtrackers</MenuItem>
                    <MenuItem value={53}>Shop FEG</MenuItem>
                </Select>
            </FormControl>
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
                        />}
                    label="Everyone"
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
                    onChange={e => setSubject(e.target.value)}
                />
                <h4>Picture</h4>
                <input
                    className="typefile"
                    type="file"
                    accept="image/*"
                    onChange={fileSelect} />
                <h4>Announcement</h4>
                <textarea
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
            </div>
            <button onClick={() => activeUser()}>Publish</button>
        </div>
    );
}

export default NewAnnouncement;