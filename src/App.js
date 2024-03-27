import './App.css';
import ContextApi from './contextApi';
import Counter from './hookuseReducer';
import PropDrilling from './propDrilling'
import UseRef from './useRef';
function App() {
  return (
    <div className="App">
      <Counter/>
      <hr/><hr/>
      <PropDrilling/>

      <hr/><hr/>
      <ContextApi/>
      <hr/><hr/>

      <UseRef/>
    </div>
  );
}

export default App;
