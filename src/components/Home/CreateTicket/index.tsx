import React, { useState } from 'react';

import CreateTicket from '../../../assets/CreateTicket.png';
import Loader from '../../Loader';

import '../PowerBI/styles.css';

const Content = () => {
  const [loaded, setLoaded] = useState(true);

  return (
    <div className="box-content images">
      <a target="_blank" href="https://fegllc.zendesk.com/hc/en-us/requests/new">
        <img src={CreateTicket} onLoad={() => setLoaded(false)} alt="Create Ticket" />
        {
          (loaded ? <Loader /> : <></>)
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
