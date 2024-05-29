import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import AllComents from './AllComents';

const App = () => {
  const [first, setFirst] = useState('');
  const [Second, setSecond] = useState([]);
  const [images, setImages] = useState([]);

  let arry = [1, 2, 3, 4, 5, 6, 7, 8];

  const OK = (e) => {
    let final = e.target.value;
    setFirst(final);
  };

  const Todo = () => {
    setSecond((prev) => [...prev, first]);
    setFirst('');
  };

  useEffect(() => {
    const imageUrls = arry.map((ele) => `https://api.dicebear.com/7.x/notionists/svg?seed=John${ele}&size=64`);
    setImages(imageUrls);
  }, []);

  return (
    <>
      {Second.map((Ele, index) => (
        <AllComents data={Ele} key={index} imgg={images[index % images.length]} />
      ))}
      <div className="flex justify-center items-center h-screen ">
        <div className="wrap-input-8 relative">
          <input className="input" type="text" placeholder="Name" onChange={OK} value={first} />
          <button className="btn absolute bottom-0 right-0 bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-purple-700" onClick={Todo}>
            <FaArrowUp />
          </button>
          <span className="focus-border">
            <i></i>
          </span>
        </div>
      </div>
    </>
  );
};

export default App;
