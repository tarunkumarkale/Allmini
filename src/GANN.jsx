import React, { useState } from 'react';

const GANN = () => {
  let initialName = [
    { name: 'taun', class: 'kla' },
    { name: 'taun', class: 'kla' },
  ];

  const [first, setFirst] = useState(initialName);
  console.log(first[0].name);

  const hello = () => {
    setFirst((prev) =>
      prev.map((item, index) => 
        index === 1 ? { ...item, name: 'tarun', class: '7' } : item
      )
    );
  };

  return (
    <div>
      <button onClick={hello} className='border-blue-950 bg-gray-500'>Click</button>
      <div>{first[1].name}</div>
    </div>
  );
};

export default GANN;
