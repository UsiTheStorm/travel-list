import React from 'react';

function Stats({ items }) {
  const numItems = items.length;

  const numPacked = items.filter((i) => i.packed).length;

  const packedPercentage = (numPacked / numItems) * 100;

  return (
    <footer className="stats">
      <em>
        💼 You have {numItems} items on your list, and you already packed {numPacked}{' '}
        <span>(This is {numPacked === 0 ? '0' : packedPercentage}% of all staff)</span>
      </em>
    </footer>
  );
}

export default Stats;
