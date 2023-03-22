import Header from "../../components/profile/header/header.component";
import PostGallery from "../../components/profile/post_gallery/post_gallery.component";

import "./profile.styles.scss"

const Profile = () =>{
    return(
        <div className="profile-container">            
            <Header/>
            <PostGallery/> 
        </div>
    );
}

export default Profile;