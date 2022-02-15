import sunIcon from '../assets/sun.svg'
import waterIcon from '../assets/water.svg'

function CareScale({scaleValue, careType}) {
    const range = [1, 2, 3];

    const scaleType = careType === 'light' ? <img src={sunIcon}/> : <img src={waterIcon}/>;

    function handleClick(e) {
        const quantity = (scaleValue == 1 ? 'peu' : scaleValue == 2 ? 'modérement' : 'beaucoup');
        e.stopPropagation()
        alert(`Cette plante requiert ${quantity} ${careType === 'light' ? 'de lumière.' : 'd\'eau.'}`)
    }
    return (
        <div onClick={(e) => handleClick(e)}>
            {range.map((rangeElem) => 
                scaleValue >= rangeElem ? <span key={rangeElem.toString()} >{scaleType}</span> : null
            )}
        </div>
    )
}

export default CareScale