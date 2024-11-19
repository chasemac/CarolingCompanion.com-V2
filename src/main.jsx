import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC7Exb5zuc9ODySDH8GJjOLTNKyy4P0YPc",
  authDomain: "caroling-companion-d2ad6.firebaseapp.com",
  databaseURL: "https://caroling-companion-d2ad6.firebaseio.com",
  projectId: "caroling-companion-d2ad6",
  storageBucket: "caroling-companion-d2ad6.firebasestorage.app",
  messagingSenderId: "1015969883158",
  appId: "1:1015969883158:web:e9c8333df40bfdc2bb8137"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)