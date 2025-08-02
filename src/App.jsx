import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainpage from './pages/Mainpage';  // Assuming you have a Mainpage component
import EventMore from './components/Eventmore';
import MarbleMore from './components/Gallerymore';
import GraniteMore from './components/Granitemore';
import QuartzMore from './components/Quartzmore';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Mainpage />} />
       <Route path='/imported' element={<EventMore/>}/>
       <Route path='/marble' element={<MarbleMore/>}/>
       <Route path='/granite' element={<GraniteMore/>}/>
       <Route path='/quartz' element={<QuartzMore/>}/>

      </Routes>
  );
}

export default App;
