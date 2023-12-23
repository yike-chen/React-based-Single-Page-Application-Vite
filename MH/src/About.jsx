import background from './img/about_background.jpeg'

import './css/About.css';

function About(){
    return(
        <div className="about">
            <img className="about__background" src={background} alt='background'/>
            <div className="about__content">
                <h2 className="about__title">OVERVIEW</h2>
                <p className="about__text">Battle gigantic monsters in epic locales.</p>
                <p className="about__text">As a hunter, you'll take on quests to hunt monsters in a variety of habitats.Take down these monsters and receive materials that you can use to create stronger weapons and armor in order to hunt even more dangerous monsters.</p>
                <p className="about__text">In Monster Hunter: World, the latest installment in the series, you can enjoy the ultimate hunting experience, using everything at your disposal to hunt monsters in a new world teeming with surprises and excitement.</p>
            </div>
        </div>
    );
}

export default About;