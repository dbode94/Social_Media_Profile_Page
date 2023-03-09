import "./photo.component.scss"
const Photo = () =>{
    return(
        <div className='photo-container'>
            <img src="https://st4.depositphotos.com/1012074/25299/v/600/depositphotos_252991838-stock-illustration-young-avatar-face-with-sunglasses.jpg" alt="profile_picture" />
            <p className='change-picture-text'>change picture</p>
        </div>
    );
}

export default Photo;