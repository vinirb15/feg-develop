import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green, grey } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';

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
    const [checked2, setChecked2] = useState(false);
    const [type, setType] = useState<string>()

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
                    value={type}
                // onChange={handleChange}
                >
                    <MenuItem value={"Meeting"}>Meeting</MenuItem>
                    <MenuItem value={"Conference Call"}>Conference Call</MenuItem>
                    <MenuItem value={"Project Delivery"}>Project Delivery</MenuItem>
                    <MenuItem value={"Reporting"}>Reporting</MenuItem>
                    <MenuItem value={"Travel and Vacation"}>Travel and Vacation</MenuItem>
                    <MenuItem value={"Location Opening"}>Location Opening</MenuItem>
                </Select>
            </FormControl>

        </div>
    )

    const locations = (
        <div className="specific-groups">
            <FormControlLabel
                control={
                    <GreenCheckbox
                        onChange={handleChange2}
                        name="checkedG"
                    />}
                label="Specific Group"
                checked={checked2 ? true : false}
            />


            <FormControl>
                <InputLabel id="demo-simple-select-label">Location</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={type}
                // onChange={handleChange}
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

    function handleChange() {
        if (checked === false) {
            setChecked(true)
        } else if (checked === true) {
            setChecked(false)
        }
    }

    function handleChange2() {
        if (checked === false) {
            setChecked2(true)
        } else if (checked === true) {
            setChecked2(false)
        }
    }

    function fileSelect(props: any) {
        console.log(props)
    }

    return (
        <div className="new-announcement">
            <h1>FEG Announcement</h1>
            <div className="create-announcement">
                <FormControlLabel
                    control={
                        <GreenCheckbox
                            // checked={state.checkedG}
                            // onChange={handleChange}
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
                        onChange={handleChange2}
                        name="checkedA"
                        />}
                    label="Specific Location"
                    style={{ display: checked2 ? "none" : "block" }}
                    checked={checked2 ? true : false}
                />
                {
                    (checked2 ? locations : <></>)
                }
            </div>
            <div className="utils">
                <h4>Subject</h4>
                <input type="text" name="nameInput" />
                <h4>Picture</h4>
                <input
                    className="typefile"
                    type="file"
                    accept="image/*"
                    onChange={fileSelect} />
                <h4>Announcement</h4>
                <textarea
                // value={Announcement}
                // onChange={e => setAnnouncement(e.target.value)}
                />
            </div>
            <button>Publish</button>
        </div>
    );
}

export default NewAnnouncement;