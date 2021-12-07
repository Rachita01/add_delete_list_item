import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState('');

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const submitHandler = () => {
    setList([...list, value]);
    setValue('');
  };

  const deleteHandler = (item) => {
    setList(list.filter((ele) => ele != item));
  };

  return (
    <div>
      <label>Item name</label>
      <input type="text" value={value} onChange={changeHandler} />{' '}
      <button onClick={submitHandler}>Add</button>
      <hr />
      <ul>
        {list.length > 0 &&
          list.map((item) => {
            return <li onClick={() => deleteHandler(item)}>{item}</li>;
          })}
      </ul>
    </div>
  );
}
