import React from 'react';

const GANN = () => {
  const friend1 = 'ramesh';
  const friend2 = 'arjun';
  const friend3 = 'vishal';

  console.log(friend1);

  const allFriends = ['ramesh', 'suresh', 'ganesh', 1, 2, 3, 4];

  for (let ele of allFriends) {
    console.log(ele);
  }


allFriends.forEach(element => {
    console.log(element);
});

console.log(allFriends.indexOf("ramesh",2));
console.log(allFriends.indexOf("suresh",0));


  return (
    <div>
      <p>Check the console for output</p>
    </div>
  );
};

export default GANN;
