import React from 'react';
import Form from './Components/Form';
import TodosData from './Components/TodosData';
import './App.scss';

import axios from 'axios';


const App = () => {


  return (
    <div className='todo-page'>
      <div className='todo-wrapper'>
        <Form />
        <TodosData />
      </div>
    </div>
  );
};

export default App;