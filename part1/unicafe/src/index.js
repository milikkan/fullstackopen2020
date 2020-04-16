import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistic = (props) => {
  const { text, value } = props;
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const { good, neutral, bad } = props

  if ((good + neutral + bad) === 0) {
    return (
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }

  const total = good + neutral + bad
  const average = (good - bad) / total
  const percentageOfPositives = (good / total) * 100
  
  return (
    <div>
      <h2>statistics</h2>
      <table>
        <thead></thead>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={total} />
          <Statistic text="average" value={average} />
          <Statistic text="positive" value={percentageOfPositives + " %"} />
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>  
  )
}

const Button = (props) => {
  const { label, onClick } = props;

  return (
    <button onClick={onClick}>
      {label}
    </button>
  )
}

const App = () => {
  const [ good, setGood ] = useState(0);
  const [ neutral, setNeutral ] = useState(0);
  const [ bad, setBad ] = useState(0);

  return (
    <div>
      <h2>give feedback</h2>
      <Button label="good" onClick={ () => setGood(good + 1) } />
      <Button label="neutral" onClick={ () => setNeutral(neutral + 1) } />
      <Button label="bad" onClick={ () => setBad(bad + 1) } />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>  
  )
}

ReactDOM.render(<App />, document.getElementById('root'));