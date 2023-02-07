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
import MappingArray from './exercises/04-Mapping-Array/MappingArray';
import MappingObject from './exercises/04.1-Mapping-Object/MappingObject';
import Jumbotron from './exercises/05-Jumbotron/Jumbotron';
import Alert from './exercises/06-Alert-Component/Alert';
import Button from './exercises/07-Conditional-Rendering/Button';
import BootstrapAlert from './exercises/07.1-Conditional-Rendering/BootstrapAlert';
import Badge from './exercises/08-Adding-Styles/Badge';
import AlertBadge from './exercises/08.1-Second-Styles/AlertBadge';
import Event from './exercises/09-Listening-Events/Event';
import Form from './exercises/Form/Form';
import FetchData from './exercises/Fetch-Data/FetchData';
import StateLifting from './exercises/StateLifting/StateLifting';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelloWorld />
    <Person />
    <Menu />
    <App />
    <BootstrapCard />
    <Jumbotron
      title="Welcome to react"
      description="React is the most popular rendering library in the world"
      buttonLabel="Go to the official website"
      buttonURL="https://reactjs.org/"
    />
    <Event />
    <PersonProps name='Paul' surname='Carty' age={22} />
    <PersonProps name='Bob' surname='Dylan' age={33} />
    <MappingArray />
    <MappingObject />
    <Badge label="Notifications" number={2} />
    <AlertBadge label="Alerts" number={2} />
    <Alert text="OMG! Something really bad has happended!" />
    <BootstrapAlert text="This is a primary alert—check it out!" color="red" />
    <BootstrapAlert text="This is a primary alert—check it out!" color="orange" />
    <Button title="Submit" isVisible={true} />
    <Button title="Reset" isVisible={false} />
    <Form />
    <FetchData />
    <StateLifting />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
