import React, { useContext } from 'react';
import { FaPlus, FaEdit } from 'react-icons/fa';
import { DataContext } from '../context/DataContext';
import axios from 'axios';
const Form = () => {
  const { setTitle, title, handelSubmit, editSign, filteredTitle, setFilteredTitle, setEditSign, filteredId } = useContext(DataContext);

  const DATA_URL = 'http://localhost:100/data';

  const handelEditSubmit = async (e) => {
    e.preventDefault();
    const itemAfterEdit = { title: filteredTitle };
    await axios.put(`${DATA_URL}/${filteredId}`, itemAfterEdit);
    setFilteredTitle('');
    setEditSign(false);
  };


  return (
    <form onSubmit={editSign === true ? handelEditSubmit : handelSubmit}>
      <input
        type="text"
        placeholder='Add ToDo'
        onChange={e => editSign === true ? setFilteredTitle(e.target.value) : setTitle(e.target.value)}
        value={editSign === true ? filteredTitle : title}

      />
      <button>{editSign === true ? <FaEdit /> : <FaPlus />}</button>
    </form>
  );
};

export default Form;