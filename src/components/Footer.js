import { useEffect, useState } from "react"
import '../styles/Footer.css'

function Footer() {
    const [inputValue, setInputValue] = useState('');

    function handleInput(e) {
        setInputValue(e.target.value)
    }
    
    function handleBlur() {
        if (!inputValue.includes('@')) {
            alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.")
        }
    }

    return (
        <footer className="lmj-footer">
            <div className="lmj-footer-elem">
                Pour les passionné·e·s de plantes 🌿🌱🌵
            </div>
            <div className="lmj-footer-elem">
                Laissez nous votre mail :
            </div>
            <div className="lmj-footer-elem"><input
                placeholder="Entrez votre email"
                onChange={handleInput}
                value={inputValue}
            /> <button onClick={() => handleBlur()}>Entrer</button></div>
        </footer>
    )
}

export default Footer