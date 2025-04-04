import {useState} from 'react';
import logo from './assets/images/logo-universal.png';
import './App.css';
import {SearchPokemon} from "../wailsjs/go/main/App";
import SearchBar from './SearchBar';
import PokemonData from './PokemonData';


function App() {
    const [pokemon, setPokemon] = useState(null);
    const [name, setName] = useState('');
    const updateName = (e) => setName(e.target.value);

    function search() {
        SearchPokemon(name).then((result) => {
            setPokemon(result);
        });
    }

    function nextPokemon() {
        if (pokemon && pokemon.id) {
            SearchPokemon((pokemon.id + 1).toString()).then((result) => {
                setPokemon(result);
                setName(result.name);
            });
        }
    }

    function previousPokemon() {
        if (pokemon && pokemon.id) {
            SearchPokemon((pokemon.id - 1).toString()).then((result) => {
                setPokemon(result);
                setName(result.name);
            });
        }
    }

    return (
        <div id="App">
            <SearchBar updateName={updateName} search={search}/>
            <PokemonData pokemon={pokemon} />
            <div id="buttons" className="buttons-box">
                <button className="btn" onClick={previousPokemon}>Prev</button>
                <button className="btn" onClick={nextPokemon}>Next</button>
            </div>
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
