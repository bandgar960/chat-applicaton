import React from 'react';
import { useEffect, useState } from 'react';
import { getDatabase, push, ref, set, onChildAdded, } from "firebase/database";
import './App.css';

function App() {
  
  const [name, setName] = useState('');
  const [chats, setChats] = useState([]);
  const [msg, setMsg] = useState('');
  // const [inputMessage, setInputMessage] = useState("");
  // const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];
  const db = getDatabase();
  const chatListRef = ref(db, 'chats');

  const updateHeight = () => {
    const el = document.getElementById('chat');
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }

  useEffect(() => {
    onChildAdded(chatListRef, (data) => {
      setChats(chats => [...chats, data.val()])
      setTimeout(() => {
        updateHeight()

      }, 100)
    });
  }, [])


  const sendChat = () => {
    // if (inputMessage.trim() !== "") {
    //   const randomUsername =
    //     user_list[Math.floor(Math.random() * user_list.length)];
      const chatRef = push(chatListRef);
     const newMessage = {
    //     username: randomUsername,
    //     message: inputMessage.trim(),
     };
     
    
    set(chatRef, {
      newMessage,
      name, message: msg
    });
    setMsg('');
  };
      

    // Clear the input box
    // setInputMessage("");
      

  
  
  
  return (
    <div>
      {name ? null : <div>
        <input
          type="text"
          placeholder="Enter user to start"
          onBlur={(e) => setName(e.target.value)}
        ></input>
      </div>}

      {name ? <div>
        <h3>User: {name}</h3>
        <div id="chat" className="chat-container">
          {chats.map((c, i) => (
            <div key={i} className={`container ${c.name === name.message ? 'me' : ''}`}>
              <p className="chatbox">
                <strong>{c.name}: </strong>
                <span>{c.message}</span>
              </p>
            </div>
          
          ))}
        </div>
        <div className="btm">
          <input
            type="text"
            onInput={(e) => setMsg(e.target.value)}
            value={msg}
            placeholder="enter your chat"
          ></input>
          <button onClick={(e) => sendChat()}>Send</button>
        </div>
      </div> : null}
    </div>

  );
}

export default App;