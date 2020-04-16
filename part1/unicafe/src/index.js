import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistics = (props) => {
  const { good, neutral, bad } = props
  const total = good + neutral + bad
  const average = (good - bad) / total
  const percentageOfPositives = (good / total) * 100
  return (
    <div>
      <h2>statistics</h2>
      good {good}<br />
      neutral {neutral}<br />
      bad {bad}<br />
      all {total}<br />
      average {average}<br />
      positive {percentageOfPositives} %
    </div>  
  )
}

const App = () => {
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>  
  )
}

ReactDOM.render(<App />, document.getElementById('root'));