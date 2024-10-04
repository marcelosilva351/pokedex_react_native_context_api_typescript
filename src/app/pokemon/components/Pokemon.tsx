import { View, Text,Image } from "react-native";
import { Pokemon } from "../..";



interface PokemonProps{
    pokemon : Pokemon
}

const PokemonComponent = (props:PokemonProps) => {


    const getColor = ():string =>{
        if(props.pokemon.type == 'Grass'){
            return 'green';
        }
        if(props.pokemon.type == 'Fire'){
            return 'red';
        }
        if(props.pokemon.type == 'Water'){
            return 'blue';
        }
        return 'black';
    }


    return (
        <View style={({
            margin: 10,
            borderRadius: 14,
            padding: 20,
            justifyContent: 'center', 
            alignItems: 'center', 
            borderWidth: 2,
            borderColor: getColor(),
        })} id={Math.random().toString()}>
          <Text>{props.pokemon.name}</Text>
              <Text>{props.pokemon.type}</Text>

          <Image style={({
            width: 200, 
            height: 200
          })} src={props.pokemon.img}></Image>
        </View>
    );
}

export default PokemonComponent;