import React, { useState, useEffect } from "react";
import axios from "axios";
import icon from "./assets/seal-logo.png";

import WordInfo from "./components/WordInfo";
import WordSearch from "./components/WordSearch";

const App = () => {
  const [data, setData] = useState([]);
  const [inp, setInp] = useState("");

  useEffect(() => {
      if (!/\S/.test(inp)) return;

      axios.get(`https://east-dict.onrender.com/get/${inp}`)
      .then((res) => {
          res.data.sort((a, b) => a.etyNum - b.etyNum);
          setData(res.data);
      });
  }, [inp])

  return (
    <div className="flex-grow flex flex-col justify-start items-center">
      <div className="flex items-center mb-4">
        <img className="w-20" src={icon} />
        <h1 className="ml-4 text-5xl italic">East Dict</h1>
      </div>

      <WordSearch
        input={inp}
        setInput={setInp}
      />

      {
        data.map((word, index) => (
          <WordInfo 
            key={index}
            char={word.char}
            name={word.name}
            type={word.type}
            senses={word.senses}
          />
        ))
      }
    </div>
  );
}

export default App;