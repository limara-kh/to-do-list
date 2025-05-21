import {useState} from 'react'
import './HW2.css'

function HW2() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

  const handleAddTask = () => {
    if (task.trim() === '') return;

    setTasks([...tasks, { text: task }]);
    setTask('');
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleEditTask = (index) => {
    setEditIndex(index);
    setEditText(tasks[index].text);
  };

  const handleSaveEdit = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].text = editText;
    setTasks(updatedTasks);
    setEditIndex(null);
    setEditText('');
  };

  const handleClearTasks = () => {
    setTasks([]);
    setEditIndex(null);
  };

  return (
    <div className="todo-container">
      <div className="input-row">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="input-box"
          placeholder="Жаңа тапсырма"
        />
        <button onClick={handleAddTask} className="add-button">Қосу</button>
        <button onClick={handleClearTasks} className="clear-button">Тазалау</button>
      </div>

      <ul className="task-list">
        {tasks.map((item, index) => (
          <li key={index} className="task-item">
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="edit-input"
                />
                <button onClick={() => handleSaveEdit(index)} className="save-button">Сақтау</button>
              </>
            ) : (
              <>
                {item.text}
                <button onClick={() => handleEditTask(index)} className="edit-button">Өңдеу</button>
                <button onClick={() => handleDeleteTask(index)} className="delete-button">Жою</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HW2;



