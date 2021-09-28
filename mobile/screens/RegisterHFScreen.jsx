import { View, Image, Text, StyleSheet, ScrollView, Button, Linking, ActivityIndicator } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler'
import React, {useLayoutEffect, useState} from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Card from '../components/cards/CardHealthFacilityRegister';

export default function RegisterHF({navigation}) {
    const [animate, setAnimate] = useState(true);
    const [data, setData] = useState([]);

    const getData = async () => {
        await fetch('https://mas-saco.herokuapp.com/api/hospital')
            .then(res => {
                return res.json();
            })
            .then(json => {
                setData(json);
            })
            .catch(error => console.log(error))
            .finally(()  => [
                setAnimate(false)
            ])
    }

    const cardList = () => {
        return data && data.map(card => {
            return(
                <Card key={card.id} data={card} navigation={navigation} />
            )
        })
    }

    useLayoutEffect(() => {
        getData()
    }, []);


    return (
        <View style={style.wrapper}>
            <View style={style.bottomSection}>
                <Text style={{alignSelf: 'center', fontSize: 24, marginVertical: 16}}>Daftar Fasilitas Kesehatan</Text>
                <ScrollView style={{width: '100%'}}>
                {
                    cardList()
                }
                    <ActivityIndicator size='large' color='blue' animating={animate} />
                </ScrollView>
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