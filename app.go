package main

import (
	"context"
	"fmt"
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

// Greet returns a greeting for the given name
func (a *App) SearchByName(name string) [2]string {
	name = strings.ToLower(name)
	pokemon, err := searchByName(name)
	if err != nil {
		return [2]string{fmt.Sprintf("Error %s", err), ""}
	}
	pokemonData := fmt.Sprintf("Name: %s. Weight: %d. Height: %d", pokemon.Name, pokemon.Weight, pokemon.Height)
	sprite := pokemon.Sprites.FrontDefault
	result := [2]string{pokemonData, sprite}
	return result
}
