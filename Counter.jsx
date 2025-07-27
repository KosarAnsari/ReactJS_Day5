import { useState } from 'react';
const Counter = () => {
  const [count, setCount] = useState(0);
  const [rcounter, setRcounter] = useState(10);

  return (
    <>
      <h1>Counter:{count}</h1>
      <h1>Reverse Counter:{rcounter}</h1>
      <button onClick={() => setCount(count + 1)}>Update Counter</button>
      <button onClick={() => setRcounter(rcounter - 1)}>Reverse Counter</button>
    </>
  );
};
export default Counter;
