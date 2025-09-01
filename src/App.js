import  { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import UserInfo from './userInfo';
import NotFound from './notFound';
import About from './About';
import Browse from './Render';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Browse />}>
        <Route index element={<Home />} />
        <Route path='userInfo' element={<UserInfo />} />
        <Route path='about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
