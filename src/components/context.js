import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";
import {useErrorHandler} from 'react-error-boundary'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const handleError = useErrorHandler();
  const [menu, setMenu] = useState(false);
  const [items, setItems] = useState([]);
  const [heads, setHeads] = useState([]);
  
  const openMenu = () => {
    setMenu(!menu);
  };
  const closeMenu = () => {
    setMenu(!menu);
  };

  const fetchHead = async () => {
    axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`).then((response) => {
    setHeads(response.data.results);
    }).catch((error) => {
    handleError(error);
    }
  )};
  
  const fetchItem = async () => {
    axios.get(`https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${process.env.REACT_APP_API_KEY}`).then((response) => {
    setItems(response.data.results);
    }).catch((error) => {
    handleError(error);
    }
  )};

  useEffect(() => {
    fetchHead()
    fetchItem()
  }, []);
  
  return (
    <AppContext.Provider
      value={{
        menu,
        items,
        heads,
        openMenu,
        closeMenu,  
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
