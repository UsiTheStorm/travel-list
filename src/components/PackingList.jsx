import { useState } from 'react';
import Item from './Item';
import Sorting from './Sorting';

function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
  const [sortBy, setSortBy] = useState('input');

  // Sorting Immediately Invoked Function Expression
  const sortedItems = (() => {
    if (sortBy === 'alphabetical')
      return [...items].sort((a, b) => a.description.localeCompare(b.description));
    if (sortBy === 'packed') return [...items].sort((a, b) => Number(a.packed) - Number(b.packed));
    return items;
  })();

  function handleSortChange(e) {
    setSortBy(e.target.value);
  }

  return (
    <div className="list">
      <div className="actions">
        <Sorting onSorting={handleSortChange} currentSortingValue={sortBy} />
        <button onClick={onClearList} disabled={!items.length}>
          Clear List
        </button>
      </div>

      {sortedItems.length > 0 ? (
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
