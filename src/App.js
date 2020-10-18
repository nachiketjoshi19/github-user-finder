import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Profile from './components/Profile';

const API = 'https://api.github.com/users/';

const App = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    const fetchItems = async () => {
      if (search) {
        const result = await axios.get(`${API}${search}`);
        console.log(result.data);
        setItems(result.data);
      } else {
        const result = await axios.get(`${API}nachiketjoshi19`);
        console.log(result.data);
        setItems(result.data);
      }
    };
    fetchItems();
    console.log(search);
  }, [search]);

  return <Profile getSearch={(s) => setSearch(s)} items={items} />;
};

export default App;
