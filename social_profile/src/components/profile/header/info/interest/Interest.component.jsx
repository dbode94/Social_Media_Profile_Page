import './interest.style.scss'

const Interest = ({interests}) =>{
    return(
        <div style={{marginTop : '1rem', color: 'white', fontWeight : 'bold'}}>
            Culinary Interests:
            <div className="interest-container">
                {interests.map((inter) =>{
                    return <div>{inter}</div> // add key to each div
                })}
            </div>
        </div>
    )
}

export default Interest;