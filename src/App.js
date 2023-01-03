import logo from './logo.svg';
import './App.css';
import TaskList from './components/container/task_list';
import Ej1 from './hooks/ej1';
import Ej2 from './hooks/ej2';
import ComponenteContexto from './hooks/ej3';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          {/* <TaskList></TaskList> */}
          {/* <Ej1></Ej1> */}
          {/* <Ej2></Ej2> */}
          <ComponenteContexto></ComponenteContexto>
        </div>
      </header>
    </div>
  );
}

export default App;
