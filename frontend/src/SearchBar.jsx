import './SearchBar.css';

function SearchBar({ updateName, search }) {
    return (
        <div id="SearchBar">
            <div id="title" className="title"><p>Search a Pokémon by name or pokedex ID</p></div>
            <div id="input" className="input-box">
                <div><input id="name" className="input" onChange={updateName} autoComplete="off" name="input" type="text"/></div>
                <div><button className="btn" onClick={search}>Search</button></div>
            </div>
        </div>
    );
}

export default SearchBar;

  