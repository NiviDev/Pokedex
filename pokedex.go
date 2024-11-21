package main

import (
	"github.com/mtslzr/pokeapi-go"
	"github.com/mtslzr/pokeapi-go/structs"
)

func searchPokemon(id string) (structs.Pokemon, error) {
	l, err := pokeapi.Pokemon(id)
	if err != nil {
		return structs.Pokemon{}, err
	}

	return l, nil
}
