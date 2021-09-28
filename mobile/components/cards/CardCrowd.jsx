import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler'
import React from 'react';

export default function Card({data}) {
    return (
        <TouchableOpacity style={style.card}>
            <View style={{flex: 1}}>
                <Image style={{width: 129, height: 103, resizeMode: 'stretch'}} source={{uri: data.picture}}/>
                <Text style={{fontWeight: 'bold', width: '100%'}}>{data.nama}</Text>
            </View>
            <View style={{marginLeft: 8, flex: 1}}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 12}}>Kepadatan Orang :</Text>
                    <Text style={{ fontSize: 12, marginLeft: 8, fontWeight: 'bold'}}>{data.keramaian}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 12}}>Kapasitas Maks :</Text>
                    <Text style={{ fontSize: 12, marginLeft: 8, fontWeight: 'bold'}}>{data.kapasitas}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 12}}>Persentase :</Text>
                    <Text style={{ fontSize: 12, marginLeft: 8, fontWeight: 'bold'}}>{Math.trunc(data.persentase)}%</Text>
                </View>
                <Text style={{width: '100%', color: 'gray', marginTop: 16, fontSize: 10}}>
                    {data.lokasi}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
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
    }
})