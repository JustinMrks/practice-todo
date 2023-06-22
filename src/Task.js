import React from 'react';

// id: 0, task: 'Complete the todo app', completed: false

const Task = ({ id, list, setList }) => {
  const toggleCheck = () => {
    let newList = list;
    newList[id].completed = !list[id].completed;
    setList([...newList]);
  };

  const deleteTask = () => {
    let newList = [...list];
    if (list[id].completed) {
      newList.splice(newList.indexOf(list.id));
      setList(newList);
    } else {
      alert('You should probably finish that first...');
    }
  };

  return (
    <div className="taskHolder">
      <span className="task">{list[id].task}</span>

      <input
        type="checkbox"
        checked={list[id].completed}
        onChange={() => {
          toggleCheck();
        }}
      />
      <button onClick={() => deleteTask()}>Delete</button>
    </div>
  );
};

export default Task;
