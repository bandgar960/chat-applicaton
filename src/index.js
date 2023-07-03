import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";


  
  const firebaseConfig = {
    apiKey: "AIzaSyDkBmPSFd1Sl5JoPlDDLrz7JflOiaN_eT8",
    authDomain: "react-chat-app-3ef91.firebaseapp.com",
    databaseURL: "https://react-chat-app-3ef91-default-rtdb.firebaseio.com",
    projectId: "react-chat-app-3ef91",
    storageBucket: "react-chat-app-3ef91.appspot.com",
    messagingSenderId: "959798612337",
    appId: "1:959798612337:web:56f2f6da7cda0c786b66d0",
 
  
};

// Initialize Firebas

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);




