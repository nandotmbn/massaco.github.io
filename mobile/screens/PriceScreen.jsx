import { View, Image, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import React, {useState, useLayoutEffect} from 'react';
import {Picker} from '@react-native-community/picker'
import Card from '../components/cards/CardPrice';
import NavFeature from '../components/global/NavFeature';

export default function PriceScreen({navigation}) {
    const [cards, setCards] = useState([]);
    const [selectedValue, setSelectedValue] = useState("");
    const [animate, setAnimate] = useState(true);

    const onPickerChange = (itemValue) => {
        setSelectedValue(itemValue);
        if (itemValue === "antigen") {
            cards.sort((a,b) => (a.antigen > b.antigen) ? 1 : ((b.antigen > a.antigen) ? -1 : 0));
        }
        else if (itemValue === "pcr") {
            cards.sort((a,b) => (a.pcr > b.pcr) ? 1 : ((b.pcr > a.pcr) ? -1 : 0));
        }
        else {
            cards.sort((a,b) => (a.pcr > b.pcr) ? 1 : ((b.pcr > a.pcr) ? -1 : 0));
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
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 12}}>Rekomendasi fasilitas kesehatan</Text>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 12}}>berdasarkan harga jenis swab</Text>
                </View>
                <View style={{flex: 7}}>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ flex: 1, color: 'white' }}
                        onValueChange={(itemValue, itemIndex) => onPickerChange(itemValue)}
                    >
                        <Picker.Item label="Urutkan" value="" />
                        <Picker.Item label="Antigen" value="antigen" />
                        <Picker.Item label="PCR" value="pcr" />
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