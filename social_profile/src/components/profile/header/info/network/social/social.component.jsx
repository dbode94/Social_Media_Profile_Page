import './social.styles.scss'

const Social = ({link, socialNetwork}) =>{
    return(
        <div className='social-container'>
            {socialNetwork} : <a href={link}>{link}</a>
        </div>
    );
}

export default Social; 