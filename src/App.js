import './App.scss';
import Home from './Home.js'
import NewPost from './NewPost'
import { useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {

  var currentDate = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"long", day:"numeric"}) 
  var selectedDay = new Date().toLocaleDateString('en-us', { month:"numeric", day:"numeric", year:"numeric" }) 
  console.log(selectedDay)

  const state = useSelector((state) => state.journal)
  console.log(JSON.stringify(state));
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="newpost" element={<NewPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
