import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import datos from '../assets/data/series.json'
import Tarjeta2 from '../components/Tarjeta2'

export default function Pagina4Screen() {
    return (
        <ImageBackground
            source={{ uri: "https://4kwallpapers.com/images/walls/thumbs_3t/2352.jpg" }}
            style={styles.img}
        >
            <View>
                <Text style={styles.header}>SERIES</Text>
                <FlatList
                    data={datos.series}
                    renderItem={({ item }) =>
                        <Tarjeta2 series={item} />
                    }
                />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        color: 'white',
    },
    img: {
        flex: 1,
    },
})