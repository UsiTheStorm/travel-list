import { useState } from 'react';

import './App.css';

import Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';

const initialItems = [
  { id: 1, description: 'Passportsh', quantity: 2, packed: true },
  { id: 2, description: 'Socks', quantity: 12, packed: false },
  { id: 3, description: 'Passportskfkfkfkfkff', quantity: 2, packed: false },
  { id: 4, description: 'Socks', quantity: 12, packed: false },
  { id: 5, description: 'Passports', quantity: 2, packed: false },
  { id: 6, description: 'Socks', quantity: 12, packed: false },
  { id: 7, description: 'Passportskfkfkfkfkff', quantity: 2, packed: false },
  { id: 8, description: 'Socks', quantity: 12, packed: false },
  { id: 9, description: 'Passports', quantity: 2, packed: false },
  { id: 10, description: 'Socks', quantity: 12, packed: false },
];

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
    console.log(items);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

export default App;
