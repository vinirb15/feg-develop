import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiLogIn, FiEdit, FiBarChart, FiMonitor } from 'react-icons/fi';

import './styles.css'

export default function Header() {

    const history = useHistory();

    function handlePage() {
        localStorage.clear();

        history.push('/');
    }

    return (
        <header>
            <h2>Wellcome, <b>Lisa Price</b></h2>


            <div  className="icons">
                <input
                placeholder="Search"
                />

                <button onClick={handlePage} type="button">
                    <FiEdit size={18} color="#9557a9" />
                </button>

                <button onClick={handlePage} type="button">
                    <FiBarChart size={18} color="#9557a9" />
                </button>

                <button onClick={handlePage} type="button">
                    <FiMonitor size={18} color="#9557a9" />
                </button>
            </div>
        </header>
    )
}