import React, { useState } from 'react';

import PowerBI from '../../../assets/PowerBI.png';

import './styles.css';

const Content = () => {

  const [loaded, setLoaded] = useState(true);

  const loader = (<div className="lds-dual-ring"></div>)


  return (
    <div className="box-content images">
      <a href="https://app.powerbi.com/?noSignUpCheck=1">
        <img src={PowerBI} onLoad={() => setLoaded(false)} alt="PowerBI" />
        {
          (loaded ? loader : <></>)
        }
        <h2>
              Log In to
          </h2>
            <h1>
              FEG Power BI
          </h1>
      </a>
    </div>
  );
}

export default Content;
