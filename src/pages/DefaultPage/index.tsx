import React, { useEffect, useState } from 'react';

import Loader from '../../components/Loader'

import './styles.css';

const HomePage: React.FC = () => {
    const [loaded, setLoaded] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(false);
        }, 2000);
    }, []);

    return (
        loaded ?
            <div style={{marginTop: "40vh"}}>
                <Loader />
            </div>
            :
            <>
                <div id="notfound">
                    <div className="notfound">
                        <div className="notfound-404">
                            <h1>Oops!</h1>
                            <h2>404 - The Page can't be found</h2>
                        </div>
                        <a href="https://account.systemfeg.com">Go To Homepage</a>
                    </div>
                </div>
            </>
    );
}

export default HomePage;
