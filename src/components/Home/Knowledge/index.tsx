import React, { useState } from 'react';

import KnowledgeBase from '../../../assets/Knowledge.png';

import '../PowerBI/styles.css';

const Content = () => {
  const [loaded, setLoaded] = useState(true);

  const loader = (<div className="lds-dual-ring"></div>)

  return (
<div className="box-content images">
          <a href="https://fegllc.zendesk.com/hc/en-us">
            <img src={KnowledgeBase} onLoad={() => setLoaded(false)} alt="Knowledge Base" />
            {
          (loaded ? loader : <></>)
        }
            <h2>
              Log In to FEG
          </h2>
            <h1>
              Knowledge Base
          </h1>
          </a>
        </div>
  );
}

export default Content;
