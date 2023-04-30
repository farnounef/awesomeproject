import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';
import axios from 'axios';

const PokemonCard = ({ pokemon, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
       <Image style={styles.image} source={{ uri: pokemon.img }} />  
      <Text style={styles.name}>{pokemon.name}</Text>
      <Text style={styles.type}>{pokemon.type.join(', ')}</Text>

    </TouchableOpacity>
  );
};

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
      .then(response => {
        setPokemons(response.data.pokemon);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handlePokemonPress = (pokemon) => {
    // TODO: Afficher le popup avec les informations détaillées du Pokémon sélectionné
  };

  return (
    <View style={styles.container}>
      {pokemons.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} onPress={() => handlePokemonPress(pokemon)} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '100%',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  type: {
    fontSize: 14,
    color: '#888',
  },
  image: {

    width:50,
    height:50,
    

   
  },

});

export default App;
