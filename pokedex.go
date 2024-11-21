package main

import (
	"github.com/mtslzr/pokeapi-go"
	"github.com/mtslzr/pokeapi-go/structs"
)

func searchByName(name string) (structs.Pokemon, error) {
	l, err := pokeapi.Pokemon(name)
	if err != nil {
		return structs.Pokemon{}, err
	}

	return l, nil
}
