import React from 'react';
import deleteIcon from '../assets/delete.png';
import tick from '../assets/tick.png';
import not_tick from '../assets/not_tick.png';

const TodoItems = ({ id, text, isCompleted, toggleComplete, deleteTodo }) => {
  return (
    <div className="flex flex-row gap-2 items-center justify-between m-2">
      <div className="flex flex-row items-center justify-center cursor-pointer w-4/5">
        <button onClick={() => toggleComplete(id)}>
          <img src={isCompleted ? tick : not_tick} alt="Status" className="w-6" />
        </button>
        <p 
          className={`ml-2 text-BlueGreen text-2xl ${isCompleted ? 'line-through' : ''}`} 
          style={{ 
            padding: '5px', 
            overflowWrap: 'break-word',
            wordBreak: 'break-word',
            whiteSpace: 'normal',
            flex: 1
          }}
        >
          {text}
        </p>
      </div>
      <button onClick={() => deleteTodo(id)}>
        <img src={deleteIcon} alt="Delete" className="w-6 cursor-pointer" />
      </button>
    </div>
  );
};

export default TodoItems;

