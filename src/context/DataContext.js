import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
export const DataContext = createContext({});

export const DataProvider = ({ children }) => {

  const [items, setItems] = useState([]);
  const [title, setTitle] = useState('');
  console.log(title);

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


  // handel delete
  const handelDelete = async (id) => {
    const itemsAfterFilter = items.filter((item) => item.id !== id);
    await axios.delete(`${DATA_URL}/${id}`, { itemsAfterFilter });
    setItems(itemsAfterFilter);

  };

  // handel check
  const handelCheck = (id) => {
    console.log(id);
  };


  return (
    <DataContext.Provider value={{
      items, setTitle, title, handelSubmit, handelCheck, handelDelete
    }}>
      {children}
    </DataContext.Provider>
  );

};
