import React, { useState } from 'react';
import Chat from './Components/Chat/chat';
import { DisplayComponent } from './Enums/DisplayCompoent'

const App = () => {
  //const [active, setActive] = useState<DisplayComponent>(DisplayComponent.Dashboard1);

  // Map the enum to components
  // const componentMap = {
  //   [DisplayComponent.Dashboard1]: <Dashboard />,
  //   [DisplayComponent.Dashboard2]: <Dashboard />,
  //   [DisplayComponent.Income]: <Income />,
  //   [DisplayComponent.Expenses]: <Expenses />,
  // };

  return (
    
        <div>
          <Chat />
        </div>
   
     
            
              
              
           
          
   
  );
}

export default App;