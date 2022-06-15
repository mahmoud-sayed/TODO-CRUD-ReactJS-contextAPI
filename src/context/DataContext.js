import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
export const DataContext = createContext({});

export const DataProvider = ({ children }) => {

  const [items, setItems] = useState([]);

  const DATA_URL = 'http://localhost:100/data';

  // handel fitch data
  useEffect(() => {

    (async function () {
      const data = await axios.get(DATA_URL);
      setItems(data.data);
    })();

  }, []);


  return (
    <DataContext.Provider value={{
      items,
    }
    }>
      {children}
    </DataContext.Provider>
  );

};
