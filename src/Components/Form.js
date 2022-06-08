import React from 'react';
import { FaPlus, FaEdit } from 'react-icons/fa';
const Form = () => {




  return (
    <form >
      <input type="text" placeholder='Add ToDo' />
      <button> <FaPlus /></button>
    </form>
  );
};

export default Form;