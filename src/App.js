import { useReducer } from 'react';

import Box from './components/box';
import Circles from './components/circle';
import Inputd from './components/inputd';

import { reducer, initialState } from './components/myreducer';

import './App.css';


function App() {

  const [data, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <div className="layout">
        <Box actionDispacher={dispatch} data={data.inbox}></Box>
        <Circles data={data.circles}></Circles>
        <Inputd actionDispacher={dispatch} count={data.circles.length}></Inputd>
      </div>
    </div>
  );
}

export default App;
