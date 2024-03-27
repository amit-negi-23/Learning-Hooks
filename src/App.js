import './App.css';
import TaniyaVideo from './Video';
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
      <hr/><hr/>
      <TaniyaVideo/>
    </div>
  );
}

export default App;
