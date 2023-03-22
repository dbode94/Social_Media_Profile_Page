import './cover_photo.styles.scss';

const CoverPhoto = ({photo}) =>{
    return(
        <div className="cover-container">
            <img src={photo} alt=""/>
        </div>   
    )
}

export default CoverPhoto;