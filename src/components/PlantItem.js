import CareScale from './CareScale'
import '../styles/PlantItem.css'

function PlantItem({name, cover, light, water, isSpecialOffer, oldPrice, price, children}) {
    return (
        <li className='lmj-plant-item' onClick={() => handleClick(name)}>
            <img className="lmj-plant-item-cover" src={cover} alt={name}/>
            {name}
            {isSpecialOffer &&
                <div>
                    <div className='lmj-sales'>Soldé !</div>
                    <div className='lmj-old-price'>
                        <div className='lmj-price-line'></div>
                        <div className='lmj-old-price-value'>{oldPrice}€</div>
                    </div>
                    <div className='lmj-sale-price'>{price}€</div>
                    
                </div>
            }
            {!isSpecialOffer && <div className='lmj-price'>{price}€</div>}
            
            <div className='lmj-bottom-plant-item'>
                <div className='lmj-care-scale'><CareScale careType = 'water' scaleValue={water} />
                <CareScale careType = 'light' scaleValue={light} /></div>
                {children}
            </div>
        </li>
    )
}

function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

export default PlantItem