import { useState } from 'react';
import { Clock } from '../components/clock';
import Picture from './images/momento.png';
import './App.css';

function App() {

  return (
    <>
      <div>
        <img src={Picture} alt="picture" className='picture' />
      </div>
      <h1>Pomodoro Technique</h1>
      <div className="card">
        <Clock />
      </div>
    </>
  );
}

export default App
