import './css/Header.css'
import logo from './img/logo.png';

function Header({setPage}){
    function go(event, page){
        event.preventDefault();
        setPage(page);
    }

    return (
        <header className="header">
            <div className="header__logo_and_title">
                <a className="header__logo_link" onClick={e => {go(e, 'Home')}}>
                    <img
                    src={logo}
                    className="header__logo"
                    alt="logo"
                    />
                </a>
                <h1 className="header__title">MONSTER HUNTER WORLD</h1>
            </div>
            <nav className="header__navigation">
            <ul className="header__navigation_menu">
            <li className="header__navigation_menu_item"><a className="header__navigation_menu_link" href="" onClick={ (e) => go(e, "Home")}>HOME</a></li>
                <li className="header__navigation_menu_item"><a className="header__navigation_menu_link" href="" onClick={ (e) => go(e, "About")}>ABOUT</a></li>
                <li className="header__navigation_menu_item"><a className="header__navigation_menu_link" href="" onClick={ (e) => go(e, "Monsters")}>MONSTERS</a></li>                    
            </ul>
        </nav>
        </header>
    );
}

export default Header;