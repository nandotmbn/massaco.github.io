import { View, Image, Text, StyleSheet, TextInput, Button, Linking } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler'
import React, {useLayoutEffect, useState} from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Card from '../components/cards/CardHealthFacility';

export default function HealthFacility() {
    const [cards, setCards] = useState([]);
    const [data, setData] = useState([]);
    const [message, setMessage] = useState('Temukan faskes berdasarkan lokasi');
    const [color, setColor] = useState('blue');

    const handleTextChange = (text) => {
        const result = data.find(card => {
            const nama = card.nama.toLowerCase();
            if (nama.includes(text.toLowerCase())) {
                return card;
            }
        });
        if (!result) {
            setColor('red');
            setCards([]);
            return setMessage('Fasilitas kesehatan tidak ditemukan')
        }
        setColor('blue');
        setMessage('Fasilitas kesehatan ditemukan')
        return setCards([result]);
    }

    const getData = async () => {
        await fetch('https://mas-saco.herokuapp.com/api/hospital')
            .then(res => {
                return res.json();
            })
            .then(json => {
                setData(json);
            })
            .catch(error => console.log(error));
    }

    const cardList = () => {
        return cards && cards.map(card => {
            return(
                <Card key={card.id} data={card} />
            )
        })
    }

    useLayoutEffect(() => {
        getData()
    }, []);


    return (
        <View style={style.wrapper}>
            <View style={{flex: 1}}>
                <TextInput
                    style={style.find}
                    placeholder="ex: Keputih"
                    onEndEditing={(e) => handleTextChange(e.nativeEvent.text)}
                />
            </View>
            <View style={style.bottomSection}>
                <Text style={{color: color, alignSelf: 'center', marginTop: 16, fontSize: 16}}>{message}</Text>
                { cardList() }
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    wrapper: {
        height: '100%',
        backgroundColor: '#2E5EBA'
    },
    bottomSection: {
        flex: 7,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    find: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        marginTop: 20,
        marginHorizontal: 40,
        paddingHorizontal: 10,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    }
})