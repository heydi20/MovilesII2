import { Button, StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function WelcomeScreen({ navigation }: any) {
  return (
    <ImageBackground
      source={{ uri: 'https://4kwallpapers.com/images/walls/thumbs_3t/15601.jpg' }}
      style={styles.background}
      resizeMode="cover" 
    >
      <View style={styles.container}>
        <Text style={styles.title}>¡Bienvenido!</Text>
        <Text style={styles.info}>Nombre: {'Heydi Herrera'}</Text>
        <Text style={styles.info}>Carrera: {'Desarrollo de software'}</Text>
        <View style={styles.buttonContainer}>
          <Button color={'purple'}
            title="IR A BOTTOM"
            onPress={() => navigation.navigate("Drawer")}
          />
        </View>
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff', 
  },
  info: {
    fontSize: 18,
    marginVertical: 5,
    color: '#fff', 
  },
  buttonContainer: {
    marginTop: 20,
    width: '60%',
    
  },
});
