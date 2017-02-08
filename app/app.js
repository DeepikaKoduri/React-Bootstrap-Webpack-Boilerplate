import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const buttonsInstance = (
  <Button>Hello World</Button>
);

ReactDOM.render(buttonsInstance, document.getElementById('app'));
