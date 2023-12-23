import { useState } from 'react';

import img01 from './img/ancient_forest.png';
import img02 from './img/wildspire_waste.png';
import img03 from './img/coral_highland.png';
import img04 from './img/rotten_vale.png'
import img05 from './img/elders_recess.png';

import './css/Carousel.css';


function Carousel(){
    const imgs = [
        {img:img01, alt:'Ancient Forest'}, 
        {img:img02, alt:'Wildspire Waste'}, 
        {img:img03, alt:'Coral Highland'}, 
        {img:img04, alt:'Rotten Vale'},
        {img:img05, alt:'Elders Recess'}
    ];
    const [imgIndex, setImgIndex] = useState(0);

    return(
        <div className="carousel">
            <div className="carousel__content">
                <button className="carousel__button left" onClick={() => setImgIndex(imgIndex - 1 === -1 ? imgs.length - 1 : imgIndex - 1)}>&#9664;</button>
            <button className="carousel__button right" onClick={() => setImgIndex((imgIndex + 1) % imgs.length)}>&#9654;</button>
            <div className="carousel__progress">
                {imgs.map((img, index) => (
                    <span
                        className={index === imgIndex ? 'active' : ''}
                        onClick={() => setImgIndex(index)}
                    />
                ))}
            </div>
            <img
                className="carousel__image"
                src={imgs[imgIndex].img}
                alt={imgs[imgIndex].alt}
            />
            </div>
            <h2 className="carousel__title">ECOSYSTEM</h2>
            <h3 className="carousel__sub_title">A World That Breathes Life</h3>
            <p className="carousel__text">There are various locations teeming with wildlife. Expeditions into these locales are bound to turn up interesting discoveries.</p>
        </div>
  );
}

export default Carousel;