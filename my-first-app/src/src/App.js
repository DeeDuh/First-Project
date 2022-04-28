import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ButtonAppBar from './components/ButtonAppBar';
import MainPage from './components/MainPage';
import TestForm from './components/TestForm';
import TestsList from './components/TestsList';

function App() {
  const [tests, setTests] = useState([]);

  console.log(tests)

  const createTest = (newTest) => {
    setTests([...tests, newTest])
  }

  const removeTest = (test) => {
    setTests(tests.filter(p => p.id !== test.id))
  }

  return (
    <div>
      <ButtonAppBar />
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/create-test' element={<TestForm create={createTest}/>}/>
        <Route path='/tests' element={<TestsList remove={removeTest} tests={tests}/>}/>
        <Route path='*' element={<div />}/>
      </Routes>
    </div>
  );
}

export default App;