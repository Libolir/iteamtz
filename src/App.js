import './App.css';
import Board from './component/Game/Board';
import Score from './component/Score/Score'

function App() {
  return (
    <div className='App'>
        <div className='Board'>
          <Board />
        </div>
        <div className='Score'>
          <Score />
        </div>
    </div>
  );
}

export default App;
