
import { useState } from "react"





const Settings = () => {
  
  

 const [counter , setCounter] = useState(1)
 
     const handleSubmit = () => {
        setCounter(counter + 1)
 
 
 
     }
   
   
     console.log("re rendered")
   
     // md:ml-64 worked to solve the issue with the chat page
       return (
         <div>
             <div>
             {counter}
         </div> 
 
         <div>
            <button onClick={handleSubmit}>Click me</button>
         </div>
         </div>
         
         
       )
     

}

export default Settings;


