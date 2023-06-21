import React, { useState } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';

const initialState = [
  { id: 0, task: 'Complete the todo app', completed: false },
  { id: 1, task: 'fill out todo items', completed: true },
];

const TaskList = () => {
  const [list, setList] = useState(initialState);

  return (
    <>
      <TaskForm list={list} setList={setList} />
      {list.map((item) => (
        <Task key={item.id} id={item.id} list={list} setList={setList} />
      ))}
    </>
  );
};

export default TaskList;
