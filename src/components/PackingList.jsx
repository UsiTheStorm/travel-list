import React, { useState } from 'react';
import Item from './Item';

function Sorting({ onSorting, currentSortingValue }) {
  return (
    <select name="sort" id="sortOrder" value={currentSortingValue} onChange={onSorting}>
      <option value="input">Sort by input order</option>
      <option value="alphabetical">Sort a-z</option>
      <option value="packed">Sort by packed status</option>
    </select>
  );
}

function PackingList({ items, onDeleteItem, onToggleItem, onListClearing }) {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;

  if (sortBy === 'input') {
    sortedItems = items;
  } else if (sortBy === 'alphabetical') {
    sortedItems = [...items].sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === 'packed') {
    sortedItems = [...items].sort((a, b) => Number(a.packed) - Number(b.packed));
  } else {
    sortedItems = items;
  }

  function handleSortChange(e) {
    setSortBy(e.target.value);
  }

  return (
    <div className="list">
      <div className="actions">
        <Sorting onSorting={handleSortChange} currentSortingValue={sortBy} />
        <button onClick={onListClearing} disabled={!items.length}>
          Clear List
        </button>
      </div>

      {items.length > 0 ? (
        <ul>
          {sortedItems.map((item) => (
            <Item
              item={item}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
              key={item.id}
            />
          ))}
        </ul>
      ) : (
        <p>Add your first item to the list 🤗</p>
      )}
    </div>
  );
}

export default PackingList;
