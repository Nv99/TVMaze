import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 

import Navbar from "./components/Navbar";

import Homepage from './pages/Homepage';
import Singlepage from './pages/Singlepage';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <div className="container">
        <Routes>
            <Route  path = '/' element={<Homepage/>}/>
            <Route  path = '/singleshow/:id' element={<Singlepage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
