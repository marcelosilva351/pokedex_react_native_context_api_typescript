import { FlatList, View, Text, Image } from "react-native";
import { Pokemon } from "../.."
import PokemonComponent from "./Pokemon";
import { usePokemonContext } from "../context/pokemon-context";
import { useEffect } from "react";



const PokemonList = () => {
    
  const {pokemons, getPokemons, isLoading} = usePokemonContext();
 

  useEffect(() => {
    getPokemons()
  } , []);

    return (
         <FlatList data={pokemons} renderItem={(pokemon) =>{
        const pokemonItem = pokemon.item;
        return <PokemonComponent pokemon={pokemonItem}></PokemonComponent> }}></FlatList>

    );
}

export default PokemonList;