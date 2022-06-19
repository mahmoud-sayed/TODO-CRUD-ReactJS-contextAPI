import React, { useContext } from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { DataContext } from '../context/DataContext';
import axios from 'axios';

const Todo = ({ id, title, completed }) => {

  const DATA_URL = 'http://localhost:100/data';
  const { handelDelete, handelEdit, items } = useContext(DataContext);
  // handel check
  const handelCheck = async (id) => {
    const filteredItem = items.filter(item => item.id === id);

    await axios.put(`${DATA_URL}/${filteredItem[0].id}`, { ...filteredItem[0], completed: !filteredItem[0].completed });
  };


  return (
    <div className='todos'>
      <ul>
        <li>
          <div className='todo-data'>
            <input
              type="checkbox"
              checked={completed}
              id="check"
              onChange={() => handelCheck(id)}
            />
            <p>{title}</p>
          </div>
          <div className='todo-actions'>
            <FaEdit className='todo-edit' onClick={() => handelEdit(id)} />
            <FaTrashAlt className='todo-delete' onClick={() => handelDelete(id)} />
          </div>
        </li>

      </ul>
    </div >
  );
};

export default Todo;