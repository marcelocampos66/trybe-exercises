import React from 'react';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

class ToStudyList extends React.Component {
  render() {
    return (
      <div>
        <h1>Coisas que o Marcelo deve estudar:</h1>
        <ol>
          {task('CSS')}
          {task('React')}
          {task('Jest')}
          {task('JavaScript')}
          {task('Python')}
        </ol>
      </div>
    )
  }
}

export default ToStudyList;
