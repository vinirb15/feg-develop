import React, { useState } from 'react';

import Zendesk from '../../../assets/Zendesk.png';

import '../PowerBI/styles.css';

const Content = () => {
  const [loaded, setLoaded] = useState(true);

  const loader = (<div className="lds-dual-ring"></div>)

  return (
    <div className="box-content images">
      <a href="https://fegllc.zendesk.com/agent//">
        <img src={Zendesk} onLoad={() => setLoaded(false)} alt="Zendesk" />
        {
          (loaded ? loader : <></>)
        }
        <h2>
          Log In to
          </h2>
        <h1>
          FEG Zendesk Management
          </h1>
      </a>
    </div>
  );
}

export default Content;
