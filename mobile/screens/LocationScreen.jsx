import { View, Image, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler'
import React, {useLayoutEffect, useState} from 'react';
import Card from '../components/cards/CardLocation';
import NavFeature from '../components/global/NavFeature';

export default function LocationScreen({navigation}) {
    const [cards, setCards] = useState([]);
    const [animate, setAnimate] = useState(true);

    const getData = async () => {
        await fetch('https://mas-saco.herokuapp.com/api/hospital')
            .then(res => {
                return res.json();
            })
            .then(json => {
                setCards(json);
            })
            .catch(error => console.log(error))
            .finally(() => {
                setAnimate(false)
            })
    }

    const cardList = () => {
        return cards.map(card => {
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
            <View style={style.head}>
                <View>
                    <Text style={{color: 'white', textAlign: 'center', paddingHorizontal: 50, fontWeight: 'bold'}}>Anda dapat menulusuri fasilitas kesehatan di Google Maps</Text>
                </View>
            </View>
            <ScrollView style={{width: '100%', marginBottom: 60}}>
            {
                cardList()
            }
                <ActivityIndicator size='large' color='blue' animating={animate} />
            </ScrollView>
            <NavFeature navigation={navigation}/>
        </View>
    );
};

const style = StyleSheet.create({
    wrapper: {
        height: '100%',
        backgroundColor: '#C3E3FF',
        alignItems:'center',
        justifyContent:'center'
    },
    head: {
        width: '100%',
        backgroundColor: '#2E5EBA',
        height: 100,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16
    },
    card: {
        flex: 1,
        flexDirection: 'row',
        width: '80%',
        alignSelf: 'center',
        backgroundColor: '#F3F9FF',
        margin: 'auto',
        marginVertical: 8,
        borderRadius: 15,
        padding: 8
    },
    box: {
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center'
    }
})