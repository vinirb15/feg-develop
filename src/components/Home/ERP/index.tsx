import React, { useState } from 'react';

import Displays from '../../../assets/Displays.png';
import Loader from '../../Loader';

import '../PowerBI/styles.css';

const Content = () => {
  const [loaded, setLoaded] = useState(true);

  return (
    <div className="box-content images">
      <a target="_blank" href="http://system.fegllc.com/">
        <img src={Displays} onLoad={() => setLoaded(false)} alt="ERP" />
        {
          (loaded ? <Loader /> : <></>)
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
