import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(anecdotes.map( () => 0 ))

  const handleNextAnecdoteClick = () => {
    const rand = Math.floor(Math.random() * anecdotes.length)
    setSelected(rand)
  }

  const handleVoteClick = () => {
    const updatedPoints = [...points]
    updatedPoints[selected] += 1
    setPoints(updatedPoints);
  }

  const maxPoint = points.reduce((acc, curr, idx) => Math.max(acc, curr))
  const maxPointIndex = points.findIndex(num => num === maxPoint)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>
        {anecdotes[selected]}<br />
        has {points[selected]} votes
      </p>
      <button onClick={handleVoteClick}>vote</button>
      <button onClick={handleNextAnecdoteClick}>next anecdote</button>
      <h2>Anecdote with most votes</h2>
      <p>
        {anecdotes[maxPointIndex]}<br />
        has {maxPoint} votes
      </p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)