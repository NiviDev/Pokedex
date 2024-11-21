import {useState} from 'react';
import logo from './assets/images/logo-universal.png';
import './App.css';
import {SearchByName} from "../wailsjs/go/main/App";

function App() {
    const [resultText, setResultText] = useState("Please enter your name below 👇");
    const [name, setName] = useState('');
    const updateName = (e) => setName(e.target.value);
    const updateResultText = (result) => setResultText(result);
    const [imageUrl, setImageUrl] = useState('')

    function search() {
        SearchByName(name).then(([pokemonData, spriteUrl]) => {
            updateResultText(pokemonData)
            setImageUrl(spriteUrl)
        });
    }

    return (
        <div id="App">
            <div id="result" className="result">{resultText}</div>
            <img src={imageUrl} alt="pokemon-sprite" width="200" height="200"/>
            <div id="input" className="input-box">
                <input id="name" className="input" onChange={updateName} autoComplete="off" name="input" type="text"/>
                <button className="btn" onClick={search}>Search</button>
            </div>
        </div>
    )
}

export default App
