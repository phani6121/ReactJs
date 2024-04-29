import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"
import "./index.css"


// function PrintName() {
//   return <h1>hello react js</h1>
// }

// const PrintName = () => {
//   return <h1>hello, iam coming from arrow function components</h1>
// }

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);

//This is for the time render for every second 
// setInterval(() => {
//     root.render(<App />);
// }, 1000);


