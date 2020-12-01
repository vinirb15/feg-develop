import React, { useState } from 'react';

import CreateTicket from '../../../assets/CreateTicket.png';

import '../PowerBI/styles.css';

const Content = () => {
  const [loaded, setLoaded] = useState(true);

  const loader = (<div className="lds-dual-ring"></div>)

  return (
    <div className="box-content images">
      <a href="https://fegllc.zendesk.com/hc/en-us/requests/new">
        <img src={CreateTicket} onLoad={() => setLoaded(false)} alt="Create Ticket" />
        {
          (loaded ? loader : <></>)
        }
        <h2>
          FEG Ticket
          </h2>
        <h1>
          Create Your Ticket
          </h1>
      </a>
    </div>
  );
}

export default Content;
