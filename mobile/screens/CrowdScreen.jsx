import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import {Picker} from '@react-native-community/picker'
import React, { useLayoutEffect, useState, useEffect } from 'react';
import Card from '../components/cards/CardCrowd';
import NavFeature from '../components/global/NavFeature';

export default function CrowdScreen({navigation}) {
    const [cards, setCards] = useState([]);
    const [animate, setAnimate] = useState(true);
    const [selectedValue, setSelectedValue] = useState("");

    const onPickerChange = (itemValue) => {
        setSelectedValue(itemValue);
        let result;
        if (itemValue === "padat") {
            result = cards.sort((a,b) => (a.persentase < b.persentase) ? 1 : ((b.persentase < a.persentase) ? -1 : 0));
            result = cards.sort((a,b) => (a.persentase < b.persentase) ? 1 : ((b.persentase < a.persentase) ? -1 : 0));
        }
        else if (itemValue === "lenggang") {
            result = cards.sort((a,b) => (a.persentase > b.persentase) ? 1 : ((b.persentase > a.persentase) ? -1 : 0));
            result = cards.sort((a,b) => (a.persentase > b.persentase) ? 1 : ((b.persentase > a.persentase) ? -1 : 0));
        }
        else {
            result = cards.sort((a,b) => (a.persentase < b.persentase) ? 1 : ((b.persentase < a.persentase) ? -1 : 0));
            result = cards.sort((a,b) => (a.persentase < b.persentase) ? 1 : ((b.persentase < a.persentase) ? -1 : 0));
        }
    }

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
                <View style={{marginLeft: 16, flex: 10}}>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 10}}>Rekomendasi fasilitas kesehatan</Text>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 10}}>berdasarkan persentase pengunjung</Text>
                </View>
                <View style={{flex: 7}}>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ flex: 1, color: 'white' }}
                        onValueChange={(itemValue, itemIndex) => onPickerChange(itemValue)}
                    >
                        <Picker.Item label="Urutkan" value="" />
                        <Picker.Item label="Terpadat" value="padat" />
                        <Picker.Item label="Terlenggang" value="lenggang" />
                    </Picker>
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
        flex: 1,
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
        marginBottom: 16,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
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