import { createContext, useState } from 'react';

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [task, setTask] = useState('');
  return (
    <TasksContext.Provider value={{ task, setTask }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContext;
