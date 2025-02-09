import React from "react";
import { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

interface Message {
  id: string,
  role : string,
  content : string

}

const Chat = () => {

    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setInput(e.target.value);
      };

    const handleSubmit = () => {
        if (input.trim() === "") return;
        console.log(input)
        
    
        // Add user message to the chat
        //uuid randomly generates a string each time this method is called
        //Allows for unique id for each message
        const userMessage = { id: uuidv4(), role: "user", content: input };
        
        setMessages([...messages, userMessage]);
        
        
        console.log(userMessage)
        
        handleResponse(userMessage)
        
        
        setInput(""); // Clear input field
      };
    
      const handleResponse = async (message: {id: string; role: string; content: string }) => {
        try {
          const userId = message.id
          const response = await axios.post("http://localhost:5000/chat", {
          // messge will be automatically converted to a json array with axios
           message: [{ id: userId , role : "user", content: message.content }],
           });
           console.log(response.data)
           const aiResponse = { id: uuidv4(), role: "Ai", content: response.data };

           setMessages((prevMessages) => [...prevMessages, aiResponse]);




        } catch (error ){  
            console.log(error, "error")
        }


    return (
     <div>

<div className="flex-1  pb-24 px-4 mt-6 ">
      {messages.map(m => (

        <div key={m.id} className={`flex mb-4  ${m.role === 'user' ? 'justify-start' : 'justify-end'}`}>
          <div className={`max-w-xs rounded-lg p-4 mt-6 ${m.role === 'user' ? 'bg-blue-200 self-start ml-4' : 'bg-gray-200 self-end mr-4'}`}>
            <span className="font-bold ">{m.role === 'user' ? 'User: ' : 'AI: '}</span>
            <span className="whitespace-pre-wrap text-black">{m.content}</span>
            
          </div>
          
        </div>
      ))}
    </div>

<div className="fixed bottom-0 left-0 right-0 md:left-64">
<div className="w-full backdrop-blur-sm p-4 md:p-6 flex justify-center items-center">
  <input
    className="w-full md:w-1/2 p-2 border border-gray-300 rounded-lg shadow-md"
    value={input}
    placeholder="Say something..."
    onChange={handleInputChange}
  />
  <button
    className="ml-2 p-2 bg-blue-500 text-white rounded-lg"
    onClick={handleSubmit}
  >
    Send
  </button>
</div>
</div>

     </div>   
    
    )


}
}
      

    



export default Chat