import axios from "axios";
import { useEffect, useState } from "react";

export default function Chatbot() {
    
  const [messages, setMessages] = useState([
    { text: "Hello , I am Jarvis ! How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  
  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    const response = await axios.post("http://localhost:1104/chat-bot" , {
        query : input ,
    })
    console.log(response)
    const result = response.data ;
    const botReply = { text: result , sender: "bot" };
    setMessages((prev) => [...prev, botReply]);
  };

  return (
    <div className="flex flex-col h-200 w-200 m-auto bg-gray-200 p-4 outline-solid mt-8 roundedlgg ">
      <div className="flex-1 overflow-auto ">
        {messages.map((msg, index) => (
          <div
          
            key={index}
            className={`max-w-90 p-3 mb-8 rounded-lg text-md ${
              msg.sender === "user"
                ? "bg-blue-500 text-white ml-auto"
                : "bg-gray-300 text-gray-800 mr-auto"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 p-2 bg-white  ">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-2 border rounded-lg "
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}
