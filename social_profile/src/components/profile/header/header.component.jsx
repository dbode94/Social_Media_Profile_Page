import Photo from "./photo/photo.component";
import Info from "./info/info.container";
import CoverPhoto from "./cover_photo/cover_photo.component";
import "./header.styles.scss"


const TestState = {
    profile_photo: 'https://st4.depositphotos.com/1012074/25299/v/600/depositphotos_252991838-stock-illustration-young-avatar-face-with-sunglasses.jpg',
    socials : [
        {
            id: 1,
            socialNetwork: 'Instagram', 
            link: 'https://www.instagram.com/_mr.bode_/'
        },
        {
            id: 2,
            socialNetwork: 'Facebook',
            link: 'https://www.facebook.com/dennis.bodesosa/'
        },
        {
            id: 3,
            socialNetwork: 'LinkedIn',
            link: 'https://www.linkedin.com/in/dennis-bode-sosa/'
        }
    ],
    connections : 250,
    interests: [
        'intalian',
        'japanese',
        'thai',
        'american',
        'peruvian',
        'mexican'
    ],
    cover: 'https://r4.wallpaperflare.com/wallpaper/728/259/631/spices-pepper-food-spoons-wallpaper-a82e4ccdbdc89e34be4d7cfdf77a945f.jpg'
}

//State should be in the App component - convert everyting to props recieved
const Header = () =>{
   return(
    <div className = 'header-container'>
        <button className="button-style"> ✏️ </button>               
        <CoverPhoto photo={TestState.cover}/>
        <Photo photo={TestState.profile_photo}/>        
        <Info socials={TestState.socials} connections={TestState.connections} interests={TestState.interests}/>
    </div>
   );
}

export default Header;