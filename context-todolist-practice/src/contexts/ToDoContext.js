//import createContext to create your context variable - also able to import hooks that are needed
import { createContext, useState } from 'react';

// variable created to hold context
const ToDoContext = createContext();

//below is the provider function that will distribute your context to all its children
export const ToDoProvider = ({ children }) => {
  const [task, setTask] = useState('');
  const [newTask, setNewTask] = useState('');
  return (
    <>
      <ToDoContext.Provider value={{ task, setTask, newTask, setNewTask }}>
        {children}
      </ToDoContext.Provider>
    </>
  );
};

export default ToDoContext;
