import React, { useState } from 'react';

import Displays from '../../../assets/Displays.png';

import '../PowerBI/styles.css';

const Content = () => {
  const [loaded, setLoaded] = useState(true);

  const loader = (<div className="lds-dual-ring"></div>)

  return (
    <div className="box-content images">
      <a href="http://system.fegllc.com/">
        <img src={Displays} onLoad={() => setLoaded(false)} alt="ERP" />
        {
          (loaded ? loader : <></>)
        }
        <h2>
          Log In to
          </h2>
        <h1>
        FEG ERP
          </h1>
      </a>
    </div>
  );
}

export default Content;
