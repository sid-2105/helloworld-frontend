import React from 'react';
import './Dropdown.css'; 

const Dropdown = ({link,text}) => {
  return (
    <div className="dropdown">
      <span className="dropbtn">Mock Test</span>
      <div className="dropdown-content">
        <a href="https://quizizz.com/join?gc=84223125" target='_blank'  rel="noreferrer">Basic Computer Quiz</a>
        <a href="https://www.google.com" target='_blank'  rel="noreferrer">Intermediate Computer Quiz</a>
        <a href="https://www.google.com" target='_blank'  rel="noreferrer">Advanced Computer Quiz</a>
      </div>
    </div>
  );
};

export default Dropdown;
