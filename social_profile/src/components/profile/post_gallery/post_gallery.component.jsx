import PostCard from './postcard/postcard.component';
import './post_gallery.styles.scss';

const PostGallery = () =>{
    return(
        <div className = 'post-container'>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
        </div>
    )
}

export default PostGallery;