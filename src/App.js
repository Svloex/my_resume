import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Content from './components/content/Content';
import "./App.css"
import Header from './components/header/Header';
import Calculator from './components/calculator/MyCalculator';

let App = (props) => {
  console.log("я тут")
  
  return (
    <div>
      <Header/>
      <div>
        <Routes>
            <Route path='https://svloex.github.io/Resume/home' element={<Content/>} />
            {/* <Route path='/Calculator' element={<Calculator/>} /> */}
            <Route path='https://svloex.github.io/Resume/wiki' element={<div>ddd</div>} />
            <Route path='https://svloex.github.io/Resume/calculator' element={<Calculator/>} />
        </Routes>
      </div>
    </div>
  
  )
  
}
export default App;



