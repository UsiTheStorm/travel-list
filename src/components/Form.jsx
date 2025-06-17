import { useState } from 'react';

// import PackingList from './PackingList';

function Form({ onAddItems }) {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  console.log(onAddItems);
  // const [items, setItems] = useState([]);

  // function handleAddItems(newItem) {
  //   setItems((prevItems) => [...prevItems, newItem]);
  //   console.log(items);
  // }

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    // console.log(description, quantity);

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    onAddItems(newItem);

    // initialItems.push(newItem);

    setDescription('');
    setQuantity(1);

    // return <PackingList item={initialItems} />;
    // return <PackingList description={description} quantity={quantity} packed={false} />;
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
