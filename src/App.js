import logo from './logo.svg';
import './App.css';
import TaskList from './components/container/task_list';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <TaskList></TaskList>
        </div>
      </header>
    </div>
  );
}

export default App;
