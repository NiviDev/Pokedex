//import './App.css';
import './PokemonData.css';
import logo from "./assets/images/PokemonLogo.png";

function PokemonData({ resultText, imageUrl, weight, height }) {
    if(resultText == "" || resultText.startsWith("Error")){
        return(
            <div className='pokemon-logo'>
                <img src={logo} width="300" height="200"/>
            </div>
        )
    }
    return (
        <div id="PokemonData" className="pokemon-data">
            <div id="result" className="result-text">{resultText}</div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${imageUrl}.png`} alt="pokemon-sprite" width="200" height="200"/>
            <div id="weight" className="data-text">Weight: {weight} hg</div>
            <div id="height" className="data-text">Height: {height} dm</div>
        </div>
    );
}

export default PokemonData;