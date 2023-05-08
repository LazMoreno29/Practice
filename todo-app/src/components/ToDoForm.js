import { useState } from 'react';

const ToDoForm = () => {
  const [newTask, setNewTask] = useState('');
  const [list, setLIst] = useState([]);

  const addNewTask = () => {
    const task = {
      id: Math.random() * 1000,
      value: newTask,
    };

    setLIst((oldList) => [...oldList, task]);
    setNewTask('');
  };

  return (
    <div className='to-do-form'>
      <h1>Form</h1>

      <input
        onChange={(e) => setNewTask(e.target.value)}
        value={newTask}
        type='text'
        placeholder='add task...'
      />
      <button onClick={addNewTask}>Add</button>
      <ul>
        {list.map((t) => {
          return <li key={t.id}>{t.value}</li>;
        })}
      </ul>
    </div>
  );
};

export default ToDoForm;
