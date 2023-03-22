import './navigationBar.styles.scss';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const NavigationBar = () => {
    return(
        <div>
            <Outlet/>
            <nav className='navigation-bar'>
              <Link className='link' to='/'>Home</Link>
              <Link className='link' to='/search'>Search</Link>
              <Link className='link' to='/post'>Post</Link>
              <Link className='link' to='/profile'>Profile</Link>
            </nav>  
        </div>
    );
}

export default NavigationBar;