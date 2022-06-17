import React, { useContext } from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { DataContext } from '../context/DataContext';

const Todo = ({ id, title, completed }) => {

  const { handelCheck, handelDelete } = useContext(DataContext);

  return (
    <div className='todos'>
      <ul>
        <li>
          <div className='todo-data'>
            <input
              type="checkbox"
              checked={completed}
              id="check"
              onClick={handelCheck(id)}
            />
            <p>{title}</p>
          </div>
          <div className='todo-actions'>
            <FaEdit className='todo-edit' />
            <FaTrashAlt className='todo-delete' onClick={() => handelDelete(id)} />
          </div>
        </li>

      </ul>
    </div >
  );
};

export default Todo;