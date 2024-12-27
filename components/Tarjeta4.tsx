import { Button, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

export default function Tarjeta4(props: any) {
  const [visible, setVisible] = useState(false);

  return (
    <TouchableOpacity onPress={() => setVisible(true)} style={styles.card}>
      <Text>{props.datos.name.first} {props.datos.name.last}</Text>
      
      <Modal
        visible={visible}
        transparent={true}
      >
        <View style={styles.modal}>
          <Image
            source={{ uri: props.datos.picture.large }} 
            style={styles.imag}
          />
          <Text style={styles.txtTitulo}>{props.datos.name.first} {props.datos.name.last}</Text>
          <Text style={styles.txtTitulo2}>Nombre localización:{props.datos.location.street.name}</Text>
          <Text style={styles.txtTitulo3}>Descripción:{props.datos.location.timezone.description}</Text>
          <Text style={styles.txtTitulo3}>Correo:{props.datos.email}</Text>
          <Button color='purple'title="Cerrar" onPress={() => setVisible(false)} />
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
  imag: {
    height: 250,
    width: 250,  
    resizeMode: 'contain',
  },
  modal: {
    backgroundColor: '#b29ee9',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTitulo: {
    fontSize: 50,
  },
  txtTitulo2: {
    fontSize: 20,
  },
  txtTitulo3: {
    fontSize: 20,
    justifyContent: 'center',
    
  },
});
