import './App.css';
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./Pages/SharedLayout"
import Home from './Pages/Home';
import Destinaton from './Pages/Destination';
import Crew from './Pages/Crew';
import Technology from './Pages/Technology';
import Error from './Pages/Error';

function App() {
  return (
    <div className="App w-full bg-black h-screen">
      
      <Routes>
        <Route  path="/" element={<SharedLayout/>} >
          <Route index element={<Home/>} />
          <Route path='destination' element={<Destinaton/>} />
          <Route path='crew' element={<Crew/>} />
          <Route path='technology' element={<Technology/>} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
