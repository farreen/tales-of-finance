import React from 'react'
import './styles.css/tofCustomCardStyles.css'

const TofCustomCard = ({items}) => {
    return (
        <div className='customCard-contanier'>
            <h6 className='customCard-title'>{items.name}</h6>
            <img  src='https://picsum.photos/500/180' alt='card pic' className='customCard-img'/>
            <p className='customCard-description'><h5>12+</h5></p>
        </div>
    )
}

export default TofCustomCard