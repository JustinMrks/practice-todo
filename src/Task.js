import React from 'react';

// id: 0, task: 'Complete the todo app', completed: false

const Task = ({ id, list, setList }) => {
  const toggleCheck = (id) => {
    const newList = list;
    newList[id].completed = !list[id].completed;
    setList([...newList]);
  };

  return (
    <div className="taskHolder">
      <span className="task">{list[id].task}</span>
      <form>
        <label>
          {' '}
          <input
            type="checkbox"
            checked={list[id].completed}
            onChange={() => {
              toggleCheck(id);
            }}
          />{' '}
        </label>
      </form>
    </div>
  );
};

export default Task;
