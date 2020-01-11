import React from 'react';

import { NavbarApp } from './Components/Navbar/Navbar';
import { JumbotronComponent } from './Components/Jumbotron/Jumbotron';
import { Features } from './Components/Features/Features';

const App = () => {
  return (
    <div>
     <NavbarApp />
     <JumbotronComponent 
       author="Ihsan Nurul Habib"
       role="Frontend Developer"
       description="I Like Frontend programming on Web or Mobile"
     />
     <Features />
    </div>
  );
}

export default App;
