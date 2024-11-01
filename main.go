package main

import (
	"fmt"

	"github.com/mtslzr/pokeapi-go"
)

func main() {
	fmt.Println("Hola mundo!")
	l, err := pokeapi.Pokemon("bulbasaur")
	if err != nil {
		fmt.Println("Error al obtener el pokemon")
	}

	fmt.Println("Pokemon obtenido: ", l.Name)
}
