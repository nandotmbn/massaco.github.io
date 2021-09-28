import { View, Image, Text, StyleSheet, ScrollView, Button, Linking } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler'
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Card({data}) {
    return (
        <View style={style.card}>
            <View style={{flex: 1}}>
                <Image style={{width: 129, height: 103, resizeMode: 'stretch'}} source={{uri: data.picture}}/>
                <Text style={{fontWeight: 'bold', width: '100%'}}>{data.nama}</Text>
            </View>
            <View style={{marginLeft: 8, flex: 1}}>
                <View style={{flexDirection: 'row', width: '80%', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text>Lokasi :</Text>
                    <TouchableOpacity
                        style={{justifyContent: 'center', alignItems: 'center'}}
                        onPress={() => Linking.openURL(`https://www.google.com/maps/dir//${data.latitude},${data.longitude}/@${data.latitude},${data.longitude},17z?hl=en`)}
                    >
                        <MaterialCommunityIcons name="google-maps" size={24} color="blue" />
                        <Text style={{fontSize: 8}}>Open in maps</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{width: '100%', color: 'gray', marginTop: 16, fontSize: 10}}>
                    Jl. Mulyorejo Utama No.201 Mulyorejo, Kec.Mulyorejo Surabaya
                </Text>
            </View>
        </View>
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