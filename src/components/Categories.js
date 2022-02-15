import "../styles/Menu.css"

function Categories({setActiveCategories, activeCategories}) {

    function resetCategories() {
        const newCategories = {...activeCategories}
        Object.keys(newCategories).forEach(key => {key === '---' ? newCategories[key] = true : newCategories[key] = false})
        setActiveCategories(newCategories)
    }

    function changeCategories(cat) {
        const newCategories = {...activeCategories}
        Object.keys(newCategories).forEach(key => {key === cat ? newCategories[key] = true : newCategories[key] = false})
        setActiveCategories(newCategories)
    }

    return <div>
        Catégorie : 
        <select
            value={Object.keys(activeCategories).find(cat => activeCategories[cat])}
            name="Catégorie" 
            className="lmj-menu-select"
            onChange={(e) => changeCategories(e.target.value)}
        >
            {Object.keys(activeCategories).map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
            ))}
        </select>        
        <button onClick={() => resetCategories()}>Voir tout</button>
    </div>
}

export default Categories

