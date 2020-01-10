import React,  { Fragment } from 'react';

import { NavbarApp } from './Components/Navbar/Navbar';
import { JumbotronComponent } from './Components/Jumbotron/Jumbotron';

const App = () => {
  return (
    <Fragment>
     <NavbarApp />
     <JumbotronComponent />
    </Fragment>
  );
}

export default App;
