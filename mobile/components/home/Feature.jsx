import { View, Image, Text, StyleSheet, Linking } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler'
import React from 'react';

export default function Feature({navigation}) {
    const openWhatsApp = () => {
        let message = "Hallo admin, saya mau tanya nih...";
        let mobile = "85655617423";
        if (mobile) {
            if (message) {
                let url = "whatsapp://send?text=" + message + "&phone=62" + mobile;
                Linking.openURL(url)
                .then(data => {
                    console.log("WhatsApp Opened successfully " + data);
                })
                .catch(() => {
                    alert("Make sure WhatsApp installed on your device");
                });
            } else {
                alert("Please enter message to send");
            }
        } else {
          alert("Please enter mobile no");
        }
    };
    return (
        <View style={{marginTop: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '100%'}}>
            <TouchableOpacity style={style.box} onPress={() => navigation.navigate('Pendaftaran Swab Test')}>
                <View style={{marginBottom: 8}}>
                    <Image source={require('../../images/vector_ek2.png')}/>
                </View>
                <Text style={{fontSize:12}}>Pendaftaran</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.box} onPress={() => navigation.navigate('Fasilitas Kesehatan')}>
                <View style={{marginBottom: 8}}>
                    <Image source={require('../../images/vector_ek3.png')}/>
                </View>
                <Text style={{fontSize:12}}>Daftar Klinik</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.box} onPress={openWhatsApp}>
                <View style={{marginBottom: 8}}>
                    <Image source={require('../../images/vector_ek5.png')}/>
                </View>
                <Text style={{fontSize:12}}>Call Center</Text>
            </TouchableOpacity>
        </View>
    );
};

const style = StyleSheet.create({
    box: {
        borderColor: 'gray',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,  
        elevation: 1,
        height: 70,
        width: 100,
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
    }
})