import React from 'react';

function Item({ item: { quantity, description, packed } }) {
  return (
    <li>
      <span style={packed ? { textDecoration: 'line-through' } : {}}>
        {quantity} {description}
      </span>
      <button>❌</button>
    </li>
  );
}

function PackingList({ items }) {
  return (
    <div className="list">
      {items.length > 0 ? (
        <ul>
          {items.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </ul>
      ) : (
        <p>Add your first item to the list 🤗</p>
      )}
    </div>
  );
}

export default PackingList;
