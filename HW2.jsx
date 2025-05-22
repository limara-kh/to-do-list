import {useState} from 'react'
import './HW2.css'

function HW2() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('all');
  
    const handleAddTask = () => {
      if (task.trim() === '') return;
      setTasks([...tasks, { taskName: task, completed: false }]);
      setTask('');
    };
  
    const handleClearTasks = () => {
      setTasks([]);
    };
  
    const handleRemove = (id) => {
      setTasks(tasks.filter((_, index) => index !== id));
    };
  
    const handleChange = (id) => {
      const newTasks = [...tasks];
      newTasks[id].completed = !newTasks[id].completed;
      setTasks(newTasks);
    };
  
    const filteredTasks = tasks.filter((task) => {
      if (filter === 'complete') return task.completed;
      if (filter === 'incomplete') return !task.completed;
      return true;
    });
  
    return (
      <div className="container">
        <div className="input">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="box"
            placeholder="Жаңа тапсырма"
          />
          <button onClick={handleAddTask} className="add-button">Қосу</button>
          <button onClick={handleClearTasks} className="clear-button">Тазалау</button>
        </div>
  
        <div className="filter">
          <button className='all' onClick={() => setFilter('all')}>All</button>
          <button className='complete' onClick={() => setFilter('complete')}>Complete</button>
          <button className='incomplete'o nClick={() => setFilter('incomplete')}>Incomplete</button>
        </div>
  
        <ul className="task-list">
          {filteredTasks.map((tapsyrma, index) => (
            <li key={index} className="task">
              <div>{tapsyrma.taskName}</div>
              <div className="btn-box">
                <button onClick={() => handleChange(index)}>
                  {tapsyrma.completed ? '✅' : '❌'}
                </button>
                <button onClick={() => handleRemove(index)}>🗑</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  export default HW2
