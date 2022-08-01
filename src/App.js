
import moment from 'moment';
import './App.css';
import TodoList from './components/todoList';

function App() {
  const formatDate = moment().format('DD-MM-YYYY')
  return (
    <div className="App">
      <h1 className='heading'>To-Do List for {formatDate}</h1>
      <TodoList/>
    </div>
  );
}

export default App;
