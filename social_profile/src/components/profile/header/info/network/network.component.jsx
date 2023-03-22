import "./network.styles.scss"
import Social from "./social/social.component";


const Network = ({socials, connections}) =>{

    return(
        <div className="network-container">
            {
                socials.map((social) => {
                    return <Social key ={social.id} link={social.link} socialNetwork ={social.socialNetwork}/>
                })
            }
            <div className="connection-container">Connections: {connections} </div>
        </div>
    );
}

export default Network;