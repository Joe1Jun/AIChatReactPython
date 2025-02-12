import { useState } from "react";

const History = () => {
  
  
    console.log("re rendered")
  
    const [counter , setCounter] = useState(1)
    
        const handleSubmit = () => {
           setCounter(counter + 1)
    
    
    
        }
      
      
        // md:ml-64 worked to solve the issue with the chat page
          return (
            <div>
                <div>
                {counter}
            </div> 
    
            <div>
               <button onClick={handleSubmit}></button>
            </div>
            </div>
            
            
          )

        }
        
    
    export default History;