import { Button, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function Tarjeta4(props:any) {
  const [visible, setvisible] = useState(false)
    return (
      <TouchableOpacity onPress={() => setvisible(true)} style={styles.card}>
        <Text>{props.datos.results.gender.name.title}</Text>
        <Modal
          visible={visible}
          transparent={true}
        >
          <View style={styles.modal}>
            <Image
              source={{ uri: props.datos.results.picture.large}}
              style={styles.imag}
            />
          </View>
        </Modal>
      </TouchableOpacity>
    );
  }
  
  const styles = StyleSheet.create({
    card: {
      marginBottom: 10,
      padding: 10,
      backgroundColor: 'lightgray',
    },
    imageContainer: {
      alignItems: 'center',
      marginVertical: 10,
    },
    imag: {
      height: 250,
      width: 400,
      resizeMode: 'contain',
    } , 
    modal: {
      backgroundColor: 'pink',  
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',  
    },
    
    txtTitulo: {
      fontSize: 50
    }
  });