import { View, Image, Text } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler'
import React from 'react';
const style = require('../../styles/home')

export default function BoxInsideCurve({navigation}) {
    return (
        <View style={style.default.cardFloat}>
            <Text style={{fontWeight: 'bold', fontSize: 14}}>Rekomendasi Tempat Swab</Text>
            <Text style={{fontWeight: 'bold', fontSize: 14}}>Berdasarkan</Text>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                marginTop: 32
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('Keramaian')}>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{height: 60, padding: 8, borderRadius: 5, backgroundColor: '#56CCF2'}} >
                            <Image source={require('../../images/_visitor_icon_2_1.png')}/>
                        </View>
                        <Text>Jumlah</Text>
                        <Text>Orang</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Lokasi')}>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{height: 60, padding: 8, borderRadius: 5, backgroundColor: '#8674F5'}}>
                            <Image source={require('../../images/_distance_removebg_preview_1.png')}/>
                        </View>
                        <Text>Lokasi</Text>
                        <Text></Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Harga')}>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{height: 60, padding: 8, borderRadius: 5, backgroundColor: '#FF6854'}}>
                            <Image source={require('../../images/_rupiah_1.png')}/>
                        </View>
                        <Text>Harga</Text>
                        <Text></Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};