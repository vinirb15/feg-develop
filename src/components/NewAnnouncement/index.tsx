import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';

import './styles.css';

const GreenCheckbox = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

const NewAnnouncement: React.FC = () => {

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
                    label="Custom color"
                />
            </div>
        </div>
    );
}

export default NewAnnouncement;
