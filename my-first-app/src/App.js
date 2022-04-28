import React from 'react';
import ButtonAppBar from './components/ButtonAppBar';
import {Route,Routes}from 'react-router-dom';
import MainPage from './components/MainPage';
import TestForm from './components/TestForm';

function App(){
return(
<div>
  <ButtonAppBar/>
  <Routes>
    <Route path='/' element={<MainPage />}/>
    <Route path='./create-test' element={<TestForm />}/>
    <Route path='./tests' element={<div />}/>
    <Route path='*' element={<div />}/>
  </Routes>
  </div>
)}

export default App;
