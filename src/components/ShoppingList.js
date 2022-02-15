import { useContext } from 'react'
import { useState } from 'react/cjs/react.development'
import CartContext from '../context/CartContext'
import CartOpenContext from '../context/CartOpenContext'
import { plantList } from '../data/PlantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'
import Categories from './Categories'
import Sort from './Sort'

function ShoppingList() {
    const {cart, updateCart} = useContext(CartContext)
    const changeClassName = useContext(CartOpenContext).changeClassName

    const categories = Object.fromEntries([['---', true]].concat(plantList.reduce(
        (tab, plant) => tab.includes(plant.category) ? tab : tab.concat(plant.category), []
    ).map(cat => ([cat, false]))))
    const [activeCategories, setActiveCategories] = useState(categories);
    
    const [activeSort,  setActiveSort] = useState('---');

    const [activePlantList, setActivePlantList] = useState(plantList)

    function addToCart(name, price, e) {
        const currentPlantAdded = cart.find((plant) => plant.name === name)
        e.stopPropagation()
        if (currentPlantAdded) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name != name
            )
            updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlantAdded.amount + 1 }
            ])
            
        } else {
            updateCart([...cart, { name, price, amount: 1 }])
        }
        changeClassName('lmj-cart-open')
    }

    return (
        <div className='lmj-shopping-list'>
            <div  className="lmj-menu">
                <Categories 
                    setActiveCategories={setActiveCategories}
                    activeCategories={activeCategories}
                />
                <Sort 
                    activeSort={activeSort}
                    setActiveSort = {setActiveSort}
                    setActivePlantList={setActivePlantList}
                />
            </div>
            <ul className="lmj-plant-list">
                {(activePlantList).map((plant) => 
                    activeCategories[plant.category] || activeCategories['---'] ? (
                        <div key = {plant.id}>
                            <PlantItem 
                                cover={plant.cover} 
                                name={plant.name} 
                                water={plant.water}
                                light={plant.light}
                                isBestSale={plant.isBestSale}
                                isSpecialOffer={plant.isSpecialOffer}
                                oldPrice={plant.oldPrice}
                                price={plant.price}
                            >
                                <div className='lmj-div-button-add-cart'><button className='lmj-button-add-cart' onClick={(e) => {
                                    addToCart(plant.name, plant.price, e)
                                }}>AJOUTER AU PANIER +</button></div>
                            </PlantItem>
                        </div>
                    ) : null
                )}
            </ul>
        </div>
    )
}

export default ShoppingList