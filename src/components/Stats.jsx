import React from 'react';

function Stats({ items }) {
  const numItems = items.length;

  const numPacked = items.filter((i) => i.packed).length;

  const packedPercentage = Math.floor((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100 ? (
          'You got everything! Ready to go ✈️'
        ) : (
          <p>
            💼 You have {numItems} items on your list, and you already packed {numPacked}
            <span>(This is {numPacked === 0 ? '0' : packedPercentage}% of all staff)</span>
          </p>
        )}
      </em>
    </footer>
  );
}

export default Stats;
