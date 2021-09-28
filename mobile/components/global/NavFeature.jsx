import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler'
import React from 'react';

export default function NavFeature({navigation}) {
    return (
        <View style={style.wrapper}>
            <TouchableOpacity onPress={() => navigation.replace('Keramaian')}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{height: 60, padding: 8, borderRadius: 5}} >
                        <Image style={{width: 50, height: 40,resizeMode: 'stretch'}} source={require('../../images/_visitor_icon_2_1.png')}/>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.replace('Lokasi')}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{height: 60, padding: 8, borderRadius: 5}}>
                        <Image style={{width: 40, height: 40,resizeMode: 'stretch'}} source={require('../../images/_distance_removebg_preview_1.png')}/>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.replace('Harga')}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{height: 60, padding: 8, borderRadius: 5}}>
                        <Image style={{width: 40, height: 40,resizeMode: 'stretch'}} source={require('../../images/_rupiah_1.png')}/>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const style = StyleSheet.create({
    wrapper: {
        height: 60,
        width: '100%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
})