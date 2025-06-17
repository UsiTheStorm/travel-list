import { useState } from 'react';

function Form({ onAddItems }) {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  console.log(onAddItems);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    onAddItems(newItem);

    setDescription('');
    setQuantity(1);
  }
  return (
    <form className="add-form" action="submit" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip</h3>

      <div className="form-input">
        <select
          name="quantity"
          id=""
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          maxLength={20}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
