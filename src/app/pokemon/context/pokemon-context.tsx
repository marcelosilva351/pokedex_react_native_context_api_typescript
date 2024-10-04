


import { useContext, createContext, useState } from "react";
import { Pokemon } from "../..";

type PokemonContextProps = {
    pokemons: Pokemon[],
    getPokemons: () => void,
    isLoading: boolean
}

export const PokemonContext = createContext<PokemonContextProps>({} as PokemonContextProps);

export const PokemonProvider = ( {children} : any) => {
      const [pokemons, setPokemons] = useState<Pokemon[]>([]);
      const [isLoading, setLoading] = useState(false);

const getPokemons = async () => {

    try {
      setLoading(true);
      const response = await fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json');
      let data = await response.json();
      data = data.pokemon;  
      const pokemons : Pokemon[] = data.map((pokemon: any) =>({
        name: pokemon.name, 
        type: pokemon.type[0],
        img: pokemon.img
      }))

      //usando for
      // let pokemons : Pokemon[] = [];
      // for(const poke of data){
      //   pokemons.push({
      //     name: poke.name, 
      //     type: poke.type[0], 
      //     img: poke.img
      //   });
      // }
      
      setPokemons(pokemons); 
            setLoading(false);

    } catch (error) {
      console.error('Erro ao buscar Pokémon:', error);
    }
  };
    return (
          <PokemonContext.Provider
            value={{
                pokemons,
                getPokemons, // Adiciona a função ao contexto
                isLoading,   // Também adiciona o estado de loading ao contexto
            }}
        >
            {children}
        </PokemonContext.Provider>
    )
}

export const usePokemonContext = () =>{
    const context = useContext(PokemonContext);
    return context;
}