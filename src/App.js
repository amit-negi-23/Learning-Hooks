import './App.css';
import ContextApi from './contextApi';
import Counter from './hookuseReducer';
import PropDrilling from './propDrilling'
function App() {
  return (
    <div className="App">
      <Counter/>
      <hr/><hr/>
      <PropDrilling/>

      <hr/><hr/>
      <ContextApi/>
    </div>
  );
}

export default App;
