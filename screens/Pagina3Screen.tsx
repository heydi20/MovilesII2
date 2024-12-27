import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import datos from '../assets/data/crash.json'
import Tarjeta from '../components/Tarjeta'

export default function Pagina3Screen() {
  return (
    <ImageBackground
      source={{ uri: "https://4kwallpapers.com/images/walls/thumbs_3t/2352.jpg" }}
      style={styles.img}
    >
      <View>
        <Text style={styles.title}>PERSONAJES</Text>
        <FlatList
          data={datos}
          renderItem={({ item }) =>
            <Tarjeta informacion={item} />
          }
        />
      </View>
    </ImageBackground >
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
    color:'white'
  },
  img:{
    flex:1
  }
})