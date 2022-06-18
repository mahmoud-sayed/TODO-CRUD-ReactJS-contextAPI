import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
export const DataContext = createContext({});

export const DataProvider = ({ children }) => {

  const [items, setItems] = useState([]);
  const [title, setTitle] = useState('');
  const [editSign, setEditSign] = useState(false);
  const [filteredTitle, setFilteredTitle] = useState('');
  const [filteredId, setFilteredId] = useState('');


  const DATA_URL = 'http://localhost:100/data';


  // handel fitch data
  useEffect(() => {

    (async function () {
      const data = await axios.get(DATA_URL);
      setItems(data.data);
    })();

  }, []);

  // handel create
  const handelCreate = async () => {
    const id = items[items.length - 1].id + 1;
    const newItem = { id, title, completed: false };
    await axios.post(`${DATA_URL}`, newItem);
    setTitle('');
  };

  // handel submit
  const handelSubmit = (e) => {
    e.preventDefault();
    handelCreate();
  };

  // handel edit
  const handelEdit = (id) => {
    setEditSign(true);
    const ItemToEdit = items.filter(item => item.id === id);
    setFilteredTitle(ItemToEdit[0].title);
    setFilteredId(ItemToEdit[0].id);

  };


  // handel delete
  const handelDelete = async (id) => {
    const itemsAfterFilter = items.filter((item) => item.id !== id);
    await axios.delete(`${DATA_URL}/${id}`, { itemsAfterFilter });
    setItems(itemsAfterFilter);
  };



  return (
    <DataContext.Provider value={{
      items,
      setTitle,
      title,
      handelSubmit,
      handelDelete,
      editSign,
      handelEdit,
      filteredTitle,
      setFilteredTitle,
      setEditSign,
      filteredId

    }}>
      {children}
    </DataContext.Provider>
  );

};
