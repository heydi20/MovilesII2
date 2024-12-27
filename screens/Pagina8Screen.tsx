import { StyleSheet, Text, View, FlatList, ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react';
import Tarjeta4 from '../components/Tarjeta4';

export default function Pagina8Screen() {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        async function leer() {

            const resp = await fetch('https://randomuser.me/api/?results=20');
            const json = await resp.json();
            setDatos(json.results);

        }
        leer();
    }, []);

    return (
        <ImageBackground
            source={{ uri: "https://4kwallpapers.com/images/walls/thumbs_3t/19.jpg" }}
            style={styles.img}

        >
            <View style={styles.container}>
                <Text style={styles.title}>USUARIOS</Text>
                <FlatList
                    data={datos}
                    renderItem={({ item }) => (
                        <Tarjeta4 datos={item} />
                    )}
                />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    img: {
        flex: 1,
    },
});
