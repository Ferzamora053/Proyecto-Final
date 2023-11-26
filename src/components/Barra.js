import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const Barra = ({ now }) => (
  <ProgressBar  className= "mt-1" now={now} label={`${now}%`} visuallyHidden />
);

export default Barra;
