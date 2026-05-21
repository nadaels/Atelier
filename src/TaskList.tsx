import React from 'react';

const TaskList: React.FC = () => {
  const tasks = ['Apprendre Git', 'Faire le sprint 8', 'Valider SonarCloud'];
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
};

export default TaskList;
