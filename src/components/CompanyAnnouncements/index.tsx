import React, { useState } from 'react';

import './styles.css';

import Company from './GeneralList';
import Local from './LocalList';
import Group from './GroupList';


const Announcements: React.FC = () => {

    const [btn, setBtn] = useState(
        {
            content: 1,
            btnCompany: '#fff',
            btnLocal: '',
            btnGroup: ''
        },
    );

    function companyContent() {
        setBtn(
            {
                content: 1,
                btnCompany: '#fff',
                btnLocal: '',
                btnGroup: ''

            }
        );
    }

    function localContent() {
        setBtn(
            {
                content: 2,
                btnCompany: '',
                btnLocal: '#fff',
                btnGroup: ''

            }
        );
    }

    function groupContent() {
        setBtn(
            {
                content: 3,
                btnCompany: '',
                btnLocal: '',
                btnGroup: '#fff'

            }
        );
    }

    function changeContent() {
        if (btn.content === 1) {
            return <Company />
        }
        if (btn.content === 2) {
            return <Local />
        }
        if (btn.content === 3) {
            return <Group />
        }
    }

    return (
        <div className="announcements">
            <div className="announcements-sidebar">
                <button style={{ color: btn.btnCompany }} onClick={companyContent}>General Announcements</button>
                <button style={{ color: btn.btnLocal }} onClick={localContent}>Local Announcements</button>
                <button style={{ color: btn.btnGroup }} onClick={groupContent}>Group Announcements</button>
            </div>
            <div className="announcements-content">
                {
                    changeContent()
                }
            </div>
        </div>
    )
}

export default Announcements;
