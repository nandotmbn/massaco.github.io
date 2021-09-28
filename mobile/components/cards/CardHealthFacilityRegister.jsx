import { View, Image, Text, StyleSheet, ScrollView, Linking } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';

export default function Card({data, navigation}) {
    return (
        <TouchableOpacity style={style.card} onPress={() => navigation.navigate('Form Pendaftaran Swab Test', data)}>
            <MaterialIcons name="contact-phone" size={48} color="orange" style={{flex: 1}} />
            <Text style={{fontWeight: 'bold', width: '100%', flex: 3, fontSize: 20}}>{data.nama}</Text>
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    card: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: '80%',
        alignSelf: 'center',
        backgroundColor: '#E4E9FF',
        margin: 'auto',
        marginVertical: 8,
        borderRadius: 15,
        padding: 8
    }
})