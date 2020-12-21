import React, { useEffect, useState } from 'react';

import './styles.css'

import SearchBox from '../SearchBox';
import LoginButton from '../LoginButton';


const Header = (props: any | 0) => {
    const [loaded, setLoaded] = useState<boolean>();
    const [info, setInfo] = useState<string>();
    let firstName = ''
    let lastName = ''
    useEffect(() => {
        onLoaded()
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

function onLoaded() {
    setTimeout(() => {
        const firstName = localStorage.getItem('firstName')
        const lastName = localStorage.getItem('lastName')
        setInfo(`${firstName} ${lastName}`);
    }, props.timeout);
}

    function handleChange() {
        while ((firstName === undefined) || (lastName === undefined)) {
            setLoaded(true)
        }
    }


    return (
        <header onLoad={handleChange}>
            {
                loaded ? <h2>Welcome</h2> : (<h2>Welcome, <b> {info}</b></h2>)
            }


            <div className="icons">
                <SearchBox />
                
                <LoginButton color="#7F43F5" width='20%' />

            </div>
        </header>
    )
}

export default Header