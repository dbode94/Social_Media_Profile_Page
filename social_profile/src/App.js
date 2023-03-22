import Profile from './routes/profile/profile.component';
import './app.style.scss'
import './App.css'
import NavigationBar from './components/profile/navigation_bar/navigation_bar.component';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path='/' element={<NavigationBar className='nav-component'/>}>
        <Route path='profile' element={<Profile/>}></Route>
      </Route>  
    </Routes>
  );
}

export default App;
