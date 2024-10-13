import React, { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import todo_icon from '../assets/todo_icon.png';
import TodoItems from './TodoItems';

const Todo = () => {
  const inputRef = useRef();
  const [tasks, setTasks] = useState(localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []);
  const addTask = () => {
    const data = inputRef.current.value.trim();
    if (data === '') {
      return;
    }
    const newTask = {
      id: uuidv4(),
      text: data,
      isCompleted: false,
    };
    setTasks((prev) => [...prev, newTask]);
    inputRef.current.value = '';
  };

  const deleteTodo = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks((prev) => 
      prev.map((task) => 
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };
  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="bg-BlueGrotto m-3 w-full h-5/6 md:max-w-md md:h-4/6 rounded-md flex flex-col p-4">
      <div className="flex flex-row gap-2 items-center justify-center mt-3">
        <img className="w-11" src={todo_icon} alt="Todo Icon" />
        <h1 className="text-5xl text-BlueGreen font-serif">Todo List</h1>
      </div>
      <div className="flex flex-row items-center bg-BabyBlue rounded-full w-full my-2">
        <input
          ref={inputRef}
          className="h-12 w-9/12 p-5 border-transparent bg-BabyBlue rounded-full placeholder:text-slate-500"
          type="text"
          name="Task"
          id="task"
          placeholder="  Enter the Task"
        />
        <button
          onClick={addTask}
          className="h-12 w-3/12 active:scale-95 bg-NavyBlue text-white rounded-full"
        >
          Add
        </button>
      </div>
      <div className="m-2 p-2 overflow-y-auto">
        {tasks.map((task) => (
          <TodoItems
            key={task.id}
            id={task.id}
            text={task.text}
            isCompleted={task.isCompleted}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
