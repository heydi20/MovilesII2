import { StyleSheet, Text, View, FlatList, ImageBackground } from 'react-native';
import React from 'react';

export default function Pagina2Screen() {
  const usuarios = [
    {
      nombre: "Juan Paz",
      edad: 23,
    },
    {
      nombre: "Ana Cruz",
      edad: 19,
    },
    {
      nombre: "Jose Guerra",
      edad: 25,
    },
  ];

  return (
    <ImageBackground
      source={{ uri: 'https://4kwallpapers.com/images/walls/thumbs_3t/12805.jpg' }} 
      style={styles.background}
      resizeMode="cover" 
    >
      <View style={styles.container}>
        <Text style={styles.title}>USUARIOS</Text>
        <FlatList
          data={usuarios}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.text}>Nombre: {item.nombre}</Text>
              <Text style={styles.text}>Edad: {item.edad}</Text>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff', 
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});
