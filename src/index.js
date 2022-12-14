import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// Components
import HelloWorld from './exercises/00-Hello-World/HelloWorld';
import Person from './exercises/01-Hello-JSX/Person';
import Menu from './exercises/02-Rendering/Menu';
import App from './exercises/02.1-Rendering-From-Object/App';
import BootstrapCard from './exercises/03-Component/BootstrapCard';
import Form from './exercises/Form/Form';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelloWorld />
    <Person />
    <Menu />
    <App />
    <BootstrapCard />
    <Form />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
