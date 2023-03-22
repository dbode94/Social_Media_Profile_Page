import './postcard.styles.scss';

const PostCard = () =>{
    return(
        <div className='card'>
            <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
            <div className='post-caption'>
                <h3>Meal Title</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, iusto amet inventore error consequuntur minus commodi enim consectetur in impedit ipsam. Blanditiis odit autem ipsa aspernatur repellat perspiciatis aperiam enim!</p>
            </div>
        </div>
    )
}

export default PostCard;