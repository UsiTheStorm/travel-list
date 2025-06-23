import React from 'react';

function Sorting({ onSorting, currentSortingValue }) {
  return (
    <select name="sort" id="sortOrder" value={currentSortingValue} onChange={onSorting}>
      <option value="input">Sort by input order</option>
      <option value="alphabetical">Sort a-z</option>
      <option value="packed">Sort by packed status</option>
    </select>
  );
}

export default Sorting;
