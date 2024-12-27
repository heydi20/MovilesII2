import { Alert, Button, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Pagina5Screen() {
  const [numero1, setnumero1] = useState(0)
  const [numero2, setnumero2] = useState(0)

  useEffect(() => {
    if (numero1 < 0) {
      Alert.alert("ERROR")
      setnumero1(0)
    }

    if (numero2 < 0) {
      Alert.alert("Error")
      setnumero2(0)
    }

  }, [numero1, numero2])

  function aumentar() {
    setnumero1(numero1 + 1)
  }
  function aumenta2() {
    setnumero2(numero2 + 1)
  }

  return (
    <ImageBackground
      source={{ uri: "https://4kwallpapers.com/images/walls/thumbs_3t/14974.jpg" }}
      style={styles.img}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.fila}>
          <Button color='purple' title='<=' onPress={() => setnumero1(numero1 - 1)} />
          <Text style={styles.txt}>{numero1}</Text>
          <Button color='purple' title='=>' onPress={() => aumentar()} />
        </View>

        <View style={styles.fila}>
          <Button color='purple' title='<=' onPress={() => setnumero2(numero2 - 1)} />
          <Text style={styles.txt}>{numero2}</Text>
          <Button color='purple' title='=>' onPress={() => aumenta2()} />
        </View>

        <View style={styles.linea} />
        <Text style={styles.txt}>SUMA:{numero1 + numero2}</Text>
        <Text style={styles.txt}>RESTA:{numero1 - numero2}</Text>
        <Text style={styles.txt}>MULTIPLICACIÓN:{numero1 * numero2}</Text>
        <Text style={styles.txt}>RESIDUO: {numero1 % numero2}</Text>


      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  fila: {
    flexDirection: 'row'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txt: {
    fontSize: 30,
    color:'white'
  },
  linea: {
    width: "90%",
    height: 5,
    margin: 10,
    backgroundColor: 'Black'

  },
  img: {
    flex: 1,
    justifyContent: 'center',
  },
})