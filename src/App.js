import React from 'react';
import Form from './Components/Form';
import TodosData from './Components/TodosData';
import './App.scss';
import { DataProvider } from './context/DataContext';



const App = () => {


  return (
    <div className='todo-page'>
      <div className='todo-wrapper'>
        <DataProvider>
          <Form />
          <TodosData />
        </DataProvider>
      </div>
    </div>
  );
};

export default App;