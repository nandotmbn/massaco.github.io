import { View, Image, Text, StyleSheet, ScrollView, Linking, TextInput, Button } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import {Picker} from '@react-native-community/picker'
import React, {useState, useEffect} from 'react';

export default function SwabRegisterForm({data, navigation, route}) {
    const [selectedValue, setSelectedValue] = useState("");
    const [nama, aturNama] = useState("");
    const [nik, aturNik] = useState("");

    const openWhatsApp = (mobile, message) => {
        let number = "";
        if (mobile.charAt(0) === '0') {
            number = mobile.substring(1)
        }
        if (number) {
            if (message) {
                let url = "whatsapp://send?text=" + message + "&phone=62" + number;
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

    const handlePress = () => {
        let tipe = '';
        console.log(selectedValue);
        if (selectedValue === 'Antigen') {
            tipe = `Antigen : Rp ${route.params.antigen}`
        }
        else if (selectedValue === 'PCR') {
            tipe = `PCR : Rp ${route.params.pcr}`
        }
        else  {
            tipe = `Antigen : Rp ${route.params.antigen}`
        }
        let str = `
Nama : ${nama}
NIK: ${nik}
Memesan Swab Test ${tipe}
        `
        openWhatsApp(route.params.telp, str);
    }
    return (
        <View style={style.wrapper}>
            <View style={style.bottomSection}>
                <Text style={{color: 'green', marginTop: 16, fontSize: 16, marginLeft: 16}}>{route.params.nama}</Text>
                <TextInput
                    style={style.input}
                    placeholder="Nama Lengkap"
                    onChangeText={text =>  aturNama(text)}
                />
                <TextInput
                    style={style.input}
                    placeholder="Nomor Induk Kependudukan"
                    onChangeText={text =>  aturNik(text)}
                    keyboardType='decimal-pad'
                />
                <View 
                    style={{width: "80%", flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}
                >
                    <Text style={{flex: 1, paddingLeft: 16}}>Jenis Swab</Text>
                    <Picker
                        selectedValue={selectedValue}
                        style={{flex: 1}}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Antigen" value="Antigen" />
                        <Picker.Item label="PCR" value="PCR" />
                    </Picker>
                </View>
                <TouchableOpacity onPress={handlePress} style={
                    {
                        alignSelf: 'center',
                        width: '80%',
                        marginTop: 16,
                        backgroundColor: 'green',
                        alignItems: 'center',
                        paddingVertical: 8,
                        borderRadius: 8
                    }
                }>
                    <Text style={{
                        color: 'white',
                        fontSize: 20
                    }}>
                        Lanjutkan
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    input: {
        borderRadius: 8,
        marginTop: 20,
        marginHorizontal: 40,
        paddingHorizontal: 10,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    },
    wrapper: {
        height: '100%',
        backgroundColor: '#2E5EBA'
    },
    bottomSection: {
        flex: 7,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
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