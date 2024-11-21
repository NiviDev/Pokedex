package main

import (
	"context"
	"fmt"
	"strconv"
	"strings"
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
// name, weight, height, and the default sprite
func (a *App) SearchPokemon(query string) [4]string {
	query = strings.ToLower(query)
	pokemon, err := searchPokemon(query)
	if err != nil {
		return [4]string{fmt.Sprintf("Error %s", err), "", "", ""}
	}

	name := capitaliceFirstLetter(pokemon.Name)
	weight := strconv.Itoa(pokemon.Weight)
	height := strconv.Itoa(pokemon.Height)
	id := strconv.Itoa(pokemon.ID)

	result := [4]string{name, weight, height, id}
	return result
}
