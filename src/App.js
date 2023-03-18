import logo from './logo.svg';
import './App.css';
import Data from './components/Data';
import ComponentA from './components/ComponentA';
import ComponentC from './components/ComponentC';
import { createContext } from 'react';
import Form from './components/Form';
import ConditionalRendering from './components/ConditionalRendering';
import UseRefDemo from './components/UseRefDemo';
import DetailedRef from './components/DetailedRef';
import UseEffect1 from './components/UseEffect1';
import FunctionComponentA from './components/FunctionComponentA';
import ErrorBoundary from './components/ErrorBoundary';
import TryCatch from './components/TryCatch';
import FRParent from './components/FRParent';
import RefForm from './Example/RefForm';
import Input from './Example/Input';
import DatePicker from './components/DatePicker';
import SpreadOperator from './components/SpreadOperator';
import ChildrenProp from './components/ChildrenProp';
export const userContext=createContext();
function App() {
  return (
    <div className="App">
      {/* <userContext.Provider value={'prudhvi'}>
        <ComponentA/>
      </userContext.Provider> */}
      {/* <Data/> */}
      {/* <Form/> */}
      {/* <ConditionalRendering/> */}
      {/* <UseRefDemo/> */}
      {/* <DetailedRef/>
      <UseEffect1/> */}
      {/* <FunctionComponentA/>
      <ErrorBoundary/>
      <TryCatch/> */}
      {/* <FRParent/> */}
      {/* <RefForm/> */}
      <DatePicker/>
      <SpreadOperator/>
      <ChildrenProp/>
      {/* <Input/> */}
      {/* <UseRefDemo/> */}
    </div>
  );
}

export default App;
