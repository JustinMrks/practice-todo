import React, { useState } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';

const initialState = [
  { id: 0, task: 'Complete the todo app', completed: false },
  { id: 1, task: 'Fill out default todo items', completed: true },
];

const TaskList = () => {
  const [list, setList] = useState(initialState);

  return (
    <>
      <TaskForm list={list} setList={setList} />

      {/* Itertate over array of tasks twice so when you update it by checking, completed items jump to the bottom */}

      {list.map((item) =>
        !item.completed ? (
          <Task key={item.id} id={item.id} list={list} setList={setList} />
        ) : (
          <></>
        )
      )}
      {list.map((item) =>
        item.completed ? (
          <Task key={item.id} id={item.id} list={list} setList={setList} />
        ) : (
          <></>
        )
      )}
    </>
  );
};

export default TaskList;
