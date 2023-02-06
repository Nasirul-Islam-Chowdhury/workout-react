import React from 'react';
import {detail} from '../Details/Details';
import './Card.css'


const Card = ({ pro }) => {
    const { img, age, description, id, time, instrument } = pro;
    const btnId = "buttonIdForDetails-"+ id;
    return (
        <div className='player-container' data-aos="fade-up">
            <div>
                <img className='img' src={img} alt="" />

            </div>
            <div className='card-text'>
                <h2 className='player-instrument'>{instrument}</h2>
                <p className='player-description'>{description}</p>
                <p className='player-age'>For Age: {age}</p>
                <p className='player-time'>Time Required: {time}s</p>
            </div>
            <button onClick={() => detail(time, btnId)} className='btn-add' id={btnId} >Add To List</button>

        </div>
    );
};

export default Card;