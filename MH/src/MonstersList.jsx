import './css/MonstersList.css'

function NewsList({monstersInformation, category}){
    const list = monstersInformation.map(monstersInformation => {
        return (
            ((monstersInformation.category === category || category === 'ALL') && 
                <div className="monsters__monsters_item">
                <li>
                    <div className="monsters__monsters_card">
                        <img className="monsters__card_pic" alt={monstersInformation.title} src={monstersInformation.img}/>
                        <div className="monsters__card_text">
                            <h3 className="monsters__card_title">{monstersInformation.title}</h3>
                            <span className={monstersInformation.className}>{monstersInformation.category}</span>
                        </div>
                    </div>
                </li>
            </div>)
        );
    });

    return(
        <ul className="monsters__monsters_list">
            {list}
        </ul>
    );
}
export default NewsList;