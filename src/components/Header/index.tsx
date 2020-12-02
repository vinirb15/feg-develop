import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiEdit, FiBarChart } from 'react-icons/fi';

import './styles.css'

import SearchBox from '../SearchBox';
import LoginButton from '../LoginButton';


const Header = () => {

   const firstName = localStorage.getItem('firstName')
   const lastName = localStorage.getItem('lastName')

    const history = useHistory();

    function handlePage() {
        localStorage.clear();

        history.push('/');
    }

    return (
        <header>
            <h2>Welcome<b>, {firstName} {lastName}</b></h2>


            <div  className="icons">
                <SearchBox />

                <button onClick={handlePage} type="button">
                    <FiEdit size={25} color="#7F43F5" />
                </button>

                <button onClick={handlePage} type="button">
                    <FiBarChart size={25} color="#7F43F5" />
                </button>

                <LoginButton color="#7F43F5" width='20%'/>

            </div>
        </header>
    )
}

export default Header
