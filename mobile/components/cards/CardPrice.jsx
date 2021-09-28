import { View, Image, Text, StyleSheet } from 'react-native';
import React from 'react';
import NumberFormat from 'react-number-format';

export default function Card({data}) {
    return (
        <View style={style.card}>
            <View style={{flex: 1}}>
                <Image style={{width: 129, height: 103, resizeMode: 'stretch'}} source={{uri: data.picture}}/>
                <Text style={{fontWeight: 'bold', width: '100%'}}>{data.nama}</Text>
            </View>
            <View style={{marginLeft: 8, flex: 1, justifyContent: 'space-evenly'}}>
                <View style={{flexDirection: 'row', width: '80%', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={{fontSize: 10}}>Antigen:</Text>
                    <Text style={{marginLeft: 8, fontWeight: 'bold'}}><NumberFormat renderText={value => <Text style={{fontSize: 10}}>{value}</Text>} value={data.antigen} displayType={'text'} thousandSeparator={true} prefix={'Rp '} /></Text>
                </View>
                <View style={{flexDirection: 'row', width: '80%', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={{fontSize: 10}}>PCR:</Text>
                    <Text style={{marginLeft: 8, fontWeight: 'bold'}}><NumberFormat renderText={value => <Text style={{fontSize: 10}}>{value}</Text>} value={data.pcr} displayType={'text'} thousandSeparator={true} prefix={'Rp '} /></Text>
                </View>
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