import React from 'react';

function Item({ item: { quantity, description, packed, id }, onDeleteItem }) {
  return (
    <li>
      <span style={packed ? { textDecoration: 'line-through' } : {}}>
        {quantity} {description}
      </span>
      <button
        onClick={() => {
          onDeleteItem(id);
        }}
      >
        ❌
      </button>
    </li>
  );
}

function PackingList({ items, onDeleteItem }) {
  return (
    <div className="list">
      {items.length > 0 ? (
        <ul>
          {items.map((item) => (
            <Item item={item} onDeleteItem={onDeleteItem} key={item.id} />
          ))}
        </ul>
      ) : (
        <p>Add your first item to the list 🤗</p>
      )}
    </div>
  );
}

export default PackingList;
