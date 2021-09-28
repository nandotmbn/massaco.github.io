import { StyleSheet, Text, View, Button, Image, TextInput, ActivityIndicator } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
const loginStyle = require('../styles/auth');

export default function Register({navigation}) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPasssword] = useState('');
    const [passwordConfirmation, setPassswordConfirmation] = useState('');
    const [textConfirmation, setTextConfirmation] = useState('');
    const [isAnimate, setAnimate] = useState(false)

    const handleRegister = async () => {
        setAnimate(true);
        if (passwordConfirmation !== password) {
            setAnimate(false);
            return setTextConfirmation('Confirmation is not valid')
        }
        const data = {
            username : username,
            email : email,
            password: password
        }
        await fetch('https://mas-saco.herokuapp.com/api/auth/user/register', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            return res.json()
        })
        .then(result => {
            setAnimate(false);
            if (result.apiKey) {
                navigation.replace('Login')
            } else {
                setTextConfirmation(result.error);
            }
        })
        .catch(error => {
            setAnimate(false);
            console.log(error.message);
        })
    }

    return (
        <View style={loginStyle.default.appContainer}>
            <View style={loginStyle.default.iconBackdrop}>
                <Image style={loginStyle.default.logoLogin} source={require('../images/logo.png')}/>
            </View>
            <View style={loginStyle.default.formContainer}>
                <View style={{flexDirection: 'row', alignItems:'center', marginTop: 24}}>
                    <Text style={loginStyle.default.textLogin}>Buat Akun</Text>
                    <ActivityIndicator style={{marginLeft: 16}} size='large' color="blue" animating={isAnimate}/>
                </View>
                <Text style={{color: 'red', fontWeight: 'bold', marginLeft: 32}}>{textConfirmation}</Text>
                <KeyboardAwareScrollView behavior='position'>
                    <TextInput
                        style={loginStyle.default.loginInput}
                        placeholder="Username"
                        onChangeText={username => setUsername(username)}
                    />
                    <TextInput
                        style={loginStyle.default.loginInput}
                        placeholder="Email"
                        keyboardType = "email-address"
                        onChangeText={email => setEmail(email)}
                    />
                    <TextInput
                        style={loginStyle.default.loginInput}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={text => setPasssword(text)}
                    />
                    <TextInput
                        style={loginStyle.default.loginInput}
                        placeholder="Password Confirmation"
                        secureTextEntry={true}
                        onChangeText={text => setPassswordConfirmation(text)}
                    />
                    <TouchableOpacity onPress={handleRegister} style={{
                        alignSelf: 'center',
                        marginTop: 24,
                        backgroundColor: '#2E5EBA',
                        width:'80%',
                        borderRadius: 6,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 20,
                            paddingVertical: 5,
                            color: 'white',
                        }}>Daftar</Text>
                    </TouchableOpacity>
                    <View style={{justifyContent: 'center', alignItems:'center', marginTop: 16}}>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                            <Text style={{color: 'gray', fontSize: 16,}}>Sudah punya akun?</Text>
                            <TouchableOpacity onPress={() => navigation.replace('Login')}>
                                <Text style={{color: 'blue', fontSize: 16, paddingLeft: 12, textDecorationLine: 'underline'}}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        </View>
    );
};