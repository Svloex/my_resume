import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Content from './components/content/Content';
import "./App.css"
import Header from './components/header/Header';
import Calculator from './components/calculator/MyCalculator';
let App = (props) => {
  return (
    <div>
      <Header/>
      <div>
        <Routes>
            <Route path='/' element={<Content/>} /> 
            <Route path='*' element={<div>{document.title = "ERROR"}</div>}/> 
            <Route path='/my_resume/home' element={<Content/>} />
            {/* <Redirect from="/" to='my_resume/home' /> */}
            {/* <Route path='/' element={<Content/>} /> */}
            {/* <Route path='/Calculator' element={<Calculator/>} /> */}
            <Route path='/my_resume/wiki' element={<div>ddd</div>} />
            <Route path='/my_resume/calculator' element={<Calculator/>} />
        </Routes>
        
      </div>
    </div>
  
  )
  
}
export default App;



