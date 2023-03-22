import './info.style.scss';
import Network from './network/network.component';
import Interest from './interest/Interest.component';

const Info = ({socials,connections,interests}) =>{
    return(
        <div className='information-container'>

            <h3><u>FirstName LastName</u></h3> 
            <p className='bios' >Lorem ipsum dolor sit amet, consectetur adipisicing edivt. Soluta maiores aaajbdoabsdoj asdnaosndpasjdpia asdjasbd asodiaoisnd asdasd asdqwd qwdasd qdqwdd .</p>
            
            <Network socials={socials} connections={connections}/>
            <Interest interests={interests}/> 
            
        </div>
    )
}

export default Info;