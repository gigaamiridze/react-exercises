import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// Importing Components
import HelloWorld from './exercises/00-Hello-World/HelloWorld';
import Person from './exercises/01-Hello-JSX/Person';
import Menu from './exercises/02-Rendering/Menu';
import App from './exercises/02.1-Rendering-From-Object/App';
import BootstrapCard from './exercises/03-Component/BootstrapCard';
import PersonProps from './exercises/03.1-Component-Props/PersonProps';
import Form from './exercises/Form/Form';
import FetchData from './exercises/Fetch-Data/FetchData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelloWorld />
    <Person />
    <Menu />
    <App />
    <BootstrapCard />
    <PersonProps name='Paul' surname='Carty' age={22} />
    <PersonProps name='Bob' surname='Dylan' age={33} />
    <Form />
    <FetchData />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
