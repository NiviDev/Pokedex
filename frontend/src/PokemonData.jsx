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

    const typesList = pokemon.types.map(type => 
        type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)
    );
    const typesText = typesList.length > 1 ? `Types: ${typesList.join(' - ')}` : `Type: ${typesList[0]}`;

    return (
        <div id="PokemonData" className="pokemon-data">
            <div id="result" className="result-text">{pokemon.name} #{pokemon.id}</div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt="pokemon-sprite" width="200" height="200"/>
            <div id="types" className="data-text">{typesText}</div>
            <div id="weight" className="data-text">Weight: {pokemon.weight} hg</div>
            <div id="height" className="data-text">Height: {pokemon.height} dm</div>
        </div>
    );
}

export default PokemonData;