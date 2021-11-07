import React from 'react';
import './app.scss';

const App = () => {
  console.log('Yooooo! It\'s working!')

  return(
    <div className='container'>
      <div className="header">
        <h1>Welcome to React Application</h1>
      </div>
      <div className='reactLogo'></div>
    </div>
  )
}

export default App;