import "./photo.component.scss"
const Photo = ({photo}) =>{
    return(
        <div className='photo-container'>
            <img src={photo} alt="profile_picture"/>
            <p className='change-picture-text'>change picture</p>
        </div>
    );
}

export default Photo;