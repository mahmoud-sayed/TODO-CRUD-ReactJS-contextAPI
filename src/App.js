import React from 'react';
import Form from './Components/Form';
import TodosData from './Components/TodosData';
import './App.scss';
import { DataContext } from './context/DataContext';



const App = () => {


  return (
    <div className='todo-page'>
      <div className='todo-wrapper'>
        <DataContext.Consumer>
          <Form />
          <TodosData />
        </DataContext.Consumer>
      </div>
    </div>
  );
};

export default App;