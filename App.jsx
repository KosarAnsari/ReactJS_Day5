{
  /*import Counter from './Counter.jsx';
import User from './User.jsx';
import { useState } from 'react';

function App() {
  const [display, setDisplay] = useState(false);
  return (
    <>
      <Counter />

      <h1>Helo</h1>
      <h1>Toggle or Hide and Show</h1>
      <button onClick={() => setDisplay(!display)}>Toggle/Show and Hide</button>
      {display ? <h1>Kosar Ansari</h1> : null}

      {display ? <User /> : null}
    </>
  );
}

export default App;*/
}

import { useState } from 'react';
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Multiple conditions in React js</h1>
      <h2>Counter:{count}</h2>
      <button onClick={() => setCount(count + 1)}>Counter</button>
      {count == 0 ? (
        <h2>Condition 0</h2>
      ) : count == 1 ? (
        <h2>Condition 1 </h2>
      ) : count == 2 ? (
        <h2>Condition 2 </h2>
      ) : count == 3 ? (
        <h2>Condition 3 </h2>
      ) : count == 4 ? (
        <h2>Condition 4 </h2>
      ) : count == 5 ? (
        <h2>Condition 5 </h2>
      ) : null}
    </>
  );
}
export default App;
