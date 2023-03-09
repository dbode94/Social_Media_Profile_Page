import "./profile.styles.scss"
import Header from "./header/header.component";

const Profile = () =>{
    return(
        <div className="App">
            <nav className='navigation-bar'>
                <p></p>
                <p></p>
                <p></p>
            </nav>  

            <Header/>

            <div className = 'social-network-container'>
                <a href="" className= 'connections'>connections</a>
            </div>
            
            <div className = 'post-container'>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
}

export default Profile;