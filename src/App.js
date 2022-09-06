import { useState } from 'react';
import Sidebar from '../src/Components/Sidebar/Sidebar.js'
import Home from '../src/Components/Home/Home.js'
import Navbar from './Components/Navbar/Navbar';

function App() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <Navbar sidebar={sidebar} set={setSidebar} />
      <div className='body'>
        <div className="sidebar_body">
          <Sidebar sidebar={sidebar} set={setSidebar}/>
        </div>
        <div className="home_body">
          <Home />
      </div>
    </div>
    </>
  );
}

export default App;
