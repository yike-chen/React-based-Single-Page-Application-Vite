import { useRef } from 'react';
import { useState } from 'react';

import './css/Footer.css';

import Subscribe from './Subscribe';
import Login from './Login';

function Footer({ setPage }) {
    const [email, setEmail] = useState('guest');

    const dialogRef = useRef();
    const dialogRefLogin = useRef();

    function go(event, page) {
        event.preventDefault();
        setPage(page);
    }

    const openSubsribe = (e) => {
        e.preventDefault();
        dialogRef.current.showModal();
    }

    const openLogin = (e) => {
        e.preventDefault();
        dialogRefLogin.current.showModal();
    }

    const footerLinks = [
        { text: 'Contect US', page: 'Contect' }
    ]

    const list = footerLinks.map(footerLinks => {
        return (
            <li className="footer__link">
                <a href="" onClick={e => { go(e, footerLinks.page) }}><span className="footer__link_arrow">&#9654;</span>{footerLinks.text}</a>
            </li>

        );
    });

    return (
        <footer className="footer">
            <ul className="footer__link_menu">
                {list}
                <li className="footer__link">
                    <a href="" onClick={openSubsribe}><span className="footer__link_arrow">&#9654;</span>Product Release News</a>
                    <Subscribe dialogRef={dialogRef} />
                </li>
                <li className="footer__link login">
                    <a href="#" onClick={openLogin}><span className="">Hello, </span>{email}</a>
                    <Login dialogRef={dialogRefLogin} email={email} setEmail={setEmail}/>
                </li>
            </ul>
            <p className="footer__copyright">© Copyright 2023 Yike Chen - All Rights Reserved</p>
        </footer>
    );
}

export default Footer;