import React, { useState } from 'react';

import Paylocity from '../../../assets/Paylocity.png';
import Loader from '../../Loader';

import '../PowerBI/styles.css';

const Content = () => {

  const [loaded, setLoaded] = useState(true);

  return (
    <div className="box-content images">
      <a target="_blank" rel="noopener noreferrer" href="https://access.paylocity.com/">
        <img style={{ display: loaded ? "none" : "block" }} src={Paylocity} onLoad={() => setLoaded(false)} alt="PowerBI" />
        {
          (loaded ? <Loader /> : <></>)
        }
        <h2>
          Log In to
          </h2>
        <h1>
          Paylocity
          </h1>
      </a>
    </div>
  );
}

export default Content;
