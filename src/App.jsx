import React from 'react'
import './App.scss'
import Sidebar from "./components/sidebar/Sidebar";
import Tab from './components/tab/Tab'



const App = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <div className="widgets">
          <div className='pages'>
            <Tab />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App