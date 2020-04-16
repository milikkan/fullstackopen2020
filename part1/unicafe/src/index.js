import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  const [ good, setGood ] = useState(0);
  const [ neutral, setNeutral ] = useState(0);
  const [ bad, setBad ] = useState(0);

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick= { () => setGood(good + 1) }>
        good
      </button>
      <button onClick= { () => setNeutral(neutral + 1) }>
        neutral
      </button>
      <button onClick= { () => setBad(bad + 1) }>
        bad
      </button>
      <h2>statistics</h2>
      good {good}<br />
      neutral {neutral}<br />
      bad {bad}<br />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));