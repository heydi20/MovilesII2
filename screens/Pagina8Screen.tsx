import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler';
import Tarjeta4 from '../components/Tarjeta4';

export default function Pagina8Screen() {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        async function leer() {
            const resp = await fetch('https://randomuser.me/api/?results=20');
            const json = await resp.json();
            setDatos(json);
        }
        leer();
    }, []);
    return (
        <View>
            <Text>PERSONAJES</Text>
            <FlatList
                data={datos}
                renderItem={({ item }) => (
                    <Tarjeta4 datos={item} />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({})