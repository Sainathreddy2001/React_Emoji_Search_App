import React, { useState, useEffect } from 'react';
import EmojiData from './emoji.json';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = EmojiData.filter(
      emoji => emoji.title.toLowerCase().includes(search.toLowerCase())
    );
    setData(newData);
  }, [search]);

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="container mt-5">
      <center>
        <h1 className="text-primary mb-4">Emoji Search App</h1>
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the Emoji"
            value={search}
            onChange={changeHandler}
          />
        </form>
        <br />
      </center>
      {data.map(emoji => (
        <div className="card mb-3" key={emoji.title}>
          <div
            className="card-body d-flex align-items-center justify-content-center"
            style={{ backgroundColor: '#f8f9fa', cursor: 'pointer' }}
            onClick={() => {
              navigator.clipboard.writeText(emoji.symbol);
              alert("Emoji copied");
            }}
          >
            <span style={{ fontSize: '2rem' }}>{emoji.symbol}</span>
            <span className="ml-3">{emoji.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
