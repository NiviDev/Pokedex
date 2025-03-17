//import './App.css';
import './PokemonData.css';
import logo from "./assets/images/PokemonLogo.png";

function PokemonData({ pokemon }) {
    if(pokemon == null || pokemon.name == ""){
        return(
            <div className='pokemon-logo'>
                <img src={logo} width="300" height="200"/>
            </div>
        )
    }
    return (
        <div id="PokemonData" className="pokemon-data">
            <div id="result" className="result-text">{pokemon.name} #{pokemon.id}</div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt="pokemon-sprite" width="200" height="200"/>
            <div id="weight" className="data-text">Weight: {pokemon.weight} hg</div>
            <div id="height" className="data-text">Height: {pokemon.height} dm</div>
        </div>
    );
}

export default PokemonData;