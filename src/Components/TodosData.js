import React from 'react';
import Todo from './Todo';

const TodosData = () => {


  return (
    <React.Fragment>
      {/*
        todos.length === 0 ? <h2 style={{ color: '#3A7BD5' }}>There is No todo </h2> :
      todos.map(todo =>*/}

      <Todo />

      { /* )
      }*/}
    </React.Fragment >
  );
};

export default TodosData;