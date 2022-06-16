import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import Todo from './Todo';

const TodosData = () => {

  const items = useContext(DataContext);
  return (
    <React.Fragment>

      {
        items.length === 0 ? <h2 style={{ color: '#3A7BD5' }}>There is No todo </h2> :
          items.map(todo =>

            <Todo key={todo.id} title={todo.title} completed={todo.completed} />

          )
      }

    </React.Fragment >
  );
};

export default TodosData;