import logo from './logo.svg';
import './App.css';
import Data from './components/Data';
import ComponentA from './components/ComponentA';
import ComponentC from './components/ComponentC';
import { createContext } from 'react';
export const userContext=createContext();
function App() {
  return (
    <div className="App">
      <userContext.Provider value={'prudhvi'}>
        <ComponentA/>
      </userContext.Provider>
    </div>
  );
}

export default App;
