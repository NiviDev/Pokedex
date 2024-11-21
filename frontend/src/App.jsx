import {useState} from 'react';
import logo from './assets/images/logo-universal.png';
import './App.css';
import {SearchPokemon} from "../wailsjs/go/main/App";

function App() {
    const [resultText, setResultText] = useState("Search a Pokémon by name or pokedex ID");
    const [name, setName] = useState('');
    const updateName = (e) => setName(e.target.value);
    const updateResultText = (result) => setResultText(result);
    const [imageUrl, setImageUrl] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');

    function search() {
        SearchPokemon(name).then(([name, weight, height, spriteUrl]) => {
            updateResultText(name);
            setWeight(weight);
            setHeight(height);
            setImageUrl(spriteUrl);
        });
    }

    return (
        <div id="App">
            <div id="result" className="result">{resultText}</div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${imageUrl}.png`} alt="pokemon-sprite" width="200" height="200"/>
            <div id="result" className="result">Weight: {weight} hectograms</div>
            <div id="result" className="result">Height: {height} decimeters</div>
            <div id="input" className="input-box">
                <input id="name" className="input" onChange={updateName} autoComplete="off" name="input" type="text"/>
                <button className="btn" onClick={search}>Search</button>
            </div>
        </div>
    )
}

export default App
