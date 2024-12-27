import { Alert, Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function KelvinToTempScreen() {
    const [kelvin, setKelvin] = useState(0);
    const [celsius, setCelsius] = useState(0);
    const [fahrenheit, setFahrenheit] = useState(0);
    

    useEffect(() => {
        if(celsius>100){
            Alert.alert("⚠️Mensaje⚠️","Ha superado la temperatura máxima")
        }
      
    }, [celsius])

    function calcular(){
        setCelsius(kelvin-273.15)
        setFahrenheit((((kelvin-273.15)*9)/5)+32)
    }
    
    return (
        <ImageBackground
            source={{ uri: "https://4kwallpapers.com/images/walls/thumbs_3t/6045.jpg" }}
            style={styles.img}
            resizeMode="cover" 
        >
            <View style={styles.container}>
                <Text style={styles.title}>TEMPERATURAS</Text>
                <TextInput style={styles.input}
                    placeholder='Ingresar temperatura'
                    keyboardType='numeric'
                    onChangeText={(texto)=>setKelvin(+texto)}
                />
                <Button title='Calcular' color={'purple'} onPress={()=>calcular()} />

                <View style={styles.linea} />
                <Text style={styles.subtitle}>Temperatura en Celsius: {celsius}°C</Text>
                <Text style={styles.subtitle}>Temperatura en Fahrenheit: {fahrenheit}°F</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
        color:'white'
    },
    input: {
        fontSize: 30,
        height: 50,
        width: '50%',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    linea: {
        width: "90%",
        height: 5,
        margin: 10,
        backgroundColor: 'white',
    },
    img: {
        flex: 1,
        justifyContent: 'center',
    },
    subtitle: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 5,
        color:'white'
    },
});
