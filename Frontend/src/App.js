
import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Chat from './pages/Chat';
import About from './pages/About';

function App() {
  return (
    <>
<BrowserRouter>
<Navigation/>
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/login" element={<Login/>}></Route>
  <Route path="/signup" element={<Signup/>}></Route>
  <Route path="/chat" element={<Chat/>}></Route>
  <Route path="/about" element={<About/>}></Route>

</Routes>
</BrowserRouter>
    </>
  );
}

export default App;
