import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import Pokemon from './pokemon/pages/pokemonPage';
import PokemonList from './pokemon/components/PokemonList';
import { CircularProgress } from 'react-native-circular-progress';
import { PokemonProvider, usePokemonContext } from './pokemon/context/pokemon-context';

export interface Pokemon{
  name : string, 
  img: string, 
  type: string
}


export default function App() {


  return (
    <PokemonProvider>
    <AppPokemon></AppPokemon>
    </PokemonProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



function AppPokemon() {


  const {pokemons, getPokemons, isLoading} = usePokemonContext();
 

  useEffect(() => {
    getPokemons()
  } , []);

  return (
    <PokemonProvider>
    <View style={styless.container}>
      {
        isLoading ?  <CircularProgress
        size={80} // Tamanho do círculo
        width={15} // Largura da barra
        fill={75} // Progresso em porcentagem
        tintColor="#00e0ff" // Cor do progresso
        backgroundColor="#3d5875" // Cor de fundo
      /> :
     <PokemonList pokemons={pokemons}></PokemonList>
      }
    </View>
    </PokemonProvider>
  );
}

const styless = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

