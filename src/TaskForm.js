import React, { useState } from 'react';

const TaskForm = ({ list, setList }) => {
  const [formValues, setFormValues] = useState('');

  const handleChange = (e) => {
    setFormValues(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    setList([
      ...list,
      {
        id: list[list.length - 1].id + 1 || 0,
        task: formValues,
        completed: false,
      },
    ]);
    setFormValues('');
  };

  return (
    <form className="form" onSubmit={submit}>
      <input type="text" value={formValues} onChange={handleChange} />
      <button> Add Task </button>
    </form>
  );
};

export default TaskForm;
