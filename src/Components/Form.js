import React, { useContext } from 'react';
import { FaPlus, FaEdit } from 'react-icons/fa';
import { DataContext } from '../context/DataContext';
const Form = () => {
  const { setTitle, title, handelSubmit } = useContext(DataContext);



  return (
    <form onSubmit={handelSubmit}>
      <input
        type="text"
        placeholder='Add ToDo'
        onChange={e => setTitle(e.target.value)}
        value={title} />
      <button> <FaPlus /></button>
    </form>
  );
};

export default Form;