import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green, grey } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';

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


const SideCheckbox = withStyles({
    root: {
        color: grey[200],
        '&$checked': {
            color: green[200],
        },
    },
    checked: {},
})((props: CheckboxProps) => <Checkbox color="primary" {...props} />);

const NewAnnouncement: React.FC = () => {

    const [checked, setChecked] = useState(false);

    const groups = (
        <div className="specific-groups">
            <FormControlLabel
                control={
                    <SideCheckbox
                        // checked={state.checkedG}
                        // onChange={handleChange}
                        name="checkedG"
                    />}
                label="In The Game Stores"
            />
            <FormControlLabel
                control={
                    <SideCheckbox
                        // checked={state.checkedG}
                        // onChange={handleChange}
                        name="checkedG"
                    />}
                label="Going Bonkers Stores"
            />
            <FormControlLabel
                control={
                    <SideCheckbox
                        // checked={state.checkedG}
                        // onChange={handleChange}
                        name="checkedG"
                    />}
                label="Great Wolf Lodge Stores"
            />
            <FormControlLabel
                control={
                    <SideCheckbox
                        // checked={state.checkedG}
                        // onChange={handleChange}
                        name="checkedG"
                    />}
                label="Kalahari Stores"
            />
        </div>
    )

    function handleChange() {

        if (checked === false) {
            setChecked(true)
        } else {
            setChecked(false)
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

                />
                {
                    (checked ? groups : <></>)
                }
                <FormControlLabel
                    control={
                        <GreenCheckbox
                            // checked={state.checkedG}
                            // onChange={handleChange}
                            name="checkedG"
                        />}
                    label="Specific Location"
                />
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