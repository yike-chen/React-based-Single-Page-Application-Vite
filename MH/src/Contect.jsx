import contectUs from './img/contect_us.jpeg';

import './css/Contect.css';

import SNS from './SNS'

function Contect() {
    return (
        <div className="contect">
            <div className="contect__info">
                <img className="contect__img"
                    alt="Contect us"
                    src={contectUs}
                />
                <div className="contect__text_content">
                    <h2 className="contect__title">Contect Us</h2>
                    <p className="contect__text">We&apos;re happy to help answer any questions you may have. Send us an email and we'll get back to you soon.
                        <br />
                        <span className="contect__e-mail">chen.yike1@northeastern.edu</span>
                    </p>
                </div>
            </div>
            <SNS/>
        </div>
    )
}

export default Contect;