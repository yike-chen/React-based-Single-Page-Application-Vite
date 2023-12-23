import { useState } from 'react';
import './css/Monsters.css';

import monster_pic01 from './img/monster_Deviljho.png';
import monster_pic02 from './img/monster_Diablos.png';
import monster_pic03 from './img/monster_KushalaDaora.png';
import monster_pic04 from './img/monster_Nergigante.png';
import monster_pic05 from './img/monster_Teostra.png';
import monster_pic06 from './img/monster_Zinogre.png';

import MonstersList from './MonstersList';

function News() {
    const [showMenu, setShowMenu] = useState(false);
    const [category, setCategory] = useState('ALL');
    const [buttonClass, setButtonClass] = useState('all');
    const monstersInformation = [
        { img: monster_pic01, title: 'Deviljho', category: 'Other', className: 'monsters__card_category card_other' },
        { img: monster_pic02, title: 'Diablos', category: 'Flying Wyverns', className: 'monsters__card_category card_fw' },
        { img: monster_pic03, title: 'KushalaDaora', category: 'Elder Dragons', className: 'monsters__card_category card_ed' },
        { img: monster_pic04, title: 'Nergigante', category: 'Elder Dragons', className: 'monsters__card_category card_ed' },
        { img: monster_pic05, title: 'Teostra', category: 'Elder Dragons', className: 'monsters__card_category card_ed' },
        { img: monster_pic06, title: 'Zinogre', category: 'Other', className: 'monsters__card_category card_other' }
    ]



    const showMenuClass = showMenu ? '' : 'monsters__toggle_list_menu--hidden';

    function go(event, category) {
        event.preventDefault();
        setCategory(category);
    }

    return (
        <div className="monsters">
            <h2 className="monsters__title">MONSTERS</h2>
            <div className="monsters__toggle_list">
                <button className={`monsters__show_button ${buttonClass}`} onClick={() => setShowMenu(!showMenu)}>{category}</button>
                <ul className={`monsters__toggle_list_menu ${showMenuClass}`}>
                    <li className="monsters__toggle_list_menu_item"><button className="monsters__toggle_list_button all" onClick={(e) => { go(e, "ALL"); setShowMenu(!showMenu); setButtonClass("all") }}>ALL</button></li>
                    <li className="monsters__toggle_list_menu_item "><button className="monsters__toggle_list_button flying_wyverns" onClick={(e) => { go(e, "Flying Wyverns"); setShowMenu(!showMenu); setButtonClass("flying_wyverns") }}>Flying Wyverns</button></li>
                    <li className="monsters__toggle_list_menu_item "><button className="monsters__toggle_list_button elder_dragons" onClick={(e) => { go(e, "Elder Dragons"); setShowMenu(!showMenu); setButtonClass("elder_dragons") }}>Elder Dragons</button></li>
                    <li className="monsters__toggle_list_menu_item "><button className="monsters__toggle_list_button other" onClick={(e) => { go(e, "Other"); setShowMenu(!showMenu); setButtonClass("other") }}>Other</button></li>
                </ul>
            </div>
            <MonstersList monstersInformation={monstersInformation} category={category} />
        </div>
    )


}

export default News;