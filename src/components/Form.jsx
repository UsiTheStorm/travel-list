import React from 'react';

function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your 😍 trip</h3>
      <form action="submit">
        <select name="quantity" id="">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <input type="text" placeholder="item..." />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Form;
