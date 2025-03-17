import {useState} from 'react';
import logo from './assets/images/logo-universal.png';
import './App.css';
import {SearchPokemon} from "../wailsjs/go/main/App";
import SearchBar from './SearchBar';
import PokemonData from './PokemonData';


function App() {
    const [resultText, setResultText] = useState("");
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
            <SearchBar updateName={updateName} search={search}/>
            <PokemonData resultText={resultText} imageUrl={imageUrl} weight={weight} height={height}/>
            <footer>
                <p>
                This Pokédex is an educational project with no commercial purpose. Pokémon and all its 
                elements are property of Nintendo, The Pokémon Company and Game Freak. Created for learning purposes.
                </p> 
            </footer>
        </div>
    )
}

export default App
