import "../styles/Menu.css"
import { plantList } from "../data/PlantList";

function changePlantList(sort, setActivePlantList) {
    if (sort === 'prix croissant') {
        setActivePlantList(plantList.slice().sort((a, b) => a.price-b.price));
    } else if (sort === 'prix décroissant') {
        setActivePlantList(plantList.slice().sort((a, b) => b.price-a.price));
    } else {
        setActivePlantList(plantList);
    }               
}

function Sort({activeSort, setActiveSort, setActivePlantList}) {
    const sort = ['---', 'prix croissant', 'prix décroissant'];
    return <div>
        Trier par : 
        <select 
            value={activeSort}
            name="trier par" 
            className="lmj-menu-select"
            onChange={function change(e){
                setActiveSort(e.target.value); 
                changePlantList(e.target.value, setActivePlantList);
            }}
        >
            {sort.map((sort) => (
                <option key={sort} value={sort}>{sort}</option>
            ))}
        </select>
        <button onClick={function reset(){
            changePlantList('---', setActivePlantList);
            setActiveSort('---')}}>
        Reset
        </button>
    </div>
}

export default Sort