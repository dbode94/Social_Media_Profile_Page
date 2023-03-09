import Photo from "../photo/photo.component";
import "./header.styles.scss"



const Header = () =>{
   return(
    <div className = 'header-container'>
        <Photo/>
        <div className='information-container'>
            <h3>FirstName LastName</h3>
            <p className='bios'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta maiores a ipsa quam cum architecto ipsum doloribus maxime quae, sapiente, illum consequuntur minus magni veniam similique iste numquam, magnam deserunt.</p>
        </div>
    </div>
   );
}

export default Header;