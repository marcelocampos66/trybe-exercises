import React from 'react';

const skills = ['CSS', 'React', 'Jest', 'JavaScript', 'Python'];

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
          {skills.map(skill => task(skill))}
        </ol>
      </div>
    )
  }
}

export default ToStudyList;
