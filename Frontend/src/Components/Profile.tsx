import { useState } from "react"

const Profile = () => {

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
           <button onClick={handleSubmit}></button>
        </div>
        </div>
        
        
      )
    
    }
    
    export default Profile;