import React from 'react';

import { NavbarApp } from './Components/Navbar/Navbar';
import { JumbotronComponent } from './Components/Jumbotron/Jumbotron';

const App = () => {
  return (
    <div>
     <NavbarApp />
     <JumbotronComponent 
       author="Ihsan Nurul Habib"
       role="Frontend Developer"
       description="I Like Frontend programming on Web or Mobile"
     />
    </div>
  );
}

export default App;
