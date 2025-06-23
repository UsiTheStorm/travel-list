import { useState, useEffect } from 'react';

import './App.css';

import Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';

function App() {
  function getInitialItems() {
    const storedItems = localStorage.getItem('packingListItems');
    console.log('Loaded from localStorage:', storedItems ? JSON.parse(storedItems) : []);
    return storedItems ? JSON.parse(storedItems) : [];
  }

  const [items, setItems] = useState(getInitialItems);

  useEffect(() => {
    localStorage.setItem('packingListItems', JSON.stringify(items));
  }, [items]);

  function handleAddItems(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleClearList() {
    const confirmed = window.confirm('Are you shure you want to delete all items?');

    if (confirmed) setItems([]);
  }

  function toggleItem(id) {
    setItems((items) =>
      items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item)),
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={toggleItem}
        onListClearing={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
