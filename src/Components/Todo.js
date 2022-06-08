import React from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

const Todo = ({ }) => {

  return (
    <div className='todos'>
      <ul>
        <li>
          <div className='todo-data'>
            <input
              type="checkbox"

              id="check"
            />
            <p>New ToDo</p>
          </div>
          <div className='todo-actions'>
            <FaEdit className='todo-edit' />
            <FaTrashAlt className='todo-delete' />
          </div>
        </li>

      </ul>
    </div >
  );
};

export default Todo;