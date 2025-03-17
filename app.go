package main

import (
	"context"
	"strings"

	"github.com/mtslzr/pokeapi-go/structs"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Search pokemon by name or by pokedex ID, and returns
// the pokemon struct
func (a *App) SearchPokemon(query string) structs.Pokemon {
	query = strings.ToLower(query)
	pokemon, err := searchPokemon(query)
	if err != nil {
		return structs.Pokemon{}
	}

	pokemon.Name = capitaliceFirstLetter(pokemon.Name)

	return pokemon
}
