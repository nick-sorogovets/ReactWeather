import React from 'react';
import Nav from 'Nav';

const Main = (props) => (
  <div>
    <Nav />
    <div className="row">
      <div className="medium-6 large-4 small-centered columns">
        {props.children}
      </div>
    </div>
  </div>
);

export default Main;
