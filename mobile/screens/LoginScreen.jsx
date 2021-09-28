import { Text, View, Button, Image, TextInput, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler'

const loginStyle = require('../styles/auth')

export default function Login({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPasssword] = useState('');
    const [message, setMessage] = useState('');
    const [isAnimate, setAnimate] = useState(false)
    const handleLogin = async () => {
        setAnimate(true);
        setMessage('');
        const data = {
            email: email,
            password: password
        }
        await fetch('https://mas-saco.herokuapp.com/api/auth/user/login', {
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
                AsyncStorage.setItem('dataUser', JSON.stringify(result));
                navigation.replace('Home')
            } else {
                setMessage("Login credentials are not valid");
            }
        })
        .catch(error => {
            setAnimate(false);
            setMessage(error.message)
        })
    }
    return (
        <View style={loginStyle.default.appContainer}>
            <View style={loginStyle.default.iconBackdrop}>
                <Image style={loginStyle.default.logoLogin} source={require('../images/logo.png')}/>
            </View>
            <View style={loginStyle.default.formContainer}>
                <KeyboardAwareScrollView>
                    <View style={{flexDirection: 'row', alignItems:'center', marginTop: 24}}>
                        <Text style={loginStyle.default.textLogin}>Login</Text>
                        <ActivityIndicator style={{marginLeft: 16}} size='large' color="blue" animating={isAnimate}/>
                    </View>
                    <Text style={{color: 'red', fontWeight: 'bold', marginLeft: 32}}>{message}</Text>
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
                        placeholder="Password"
                        onChangeText={password => setPasssword(password)}
                    />
                    <TouchableOpacity onPress={handleLogin} style={{
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
                        }}>Masuk</Text>
                    </TouchableOpacity>
                    <View style={{justifyContent: 'center', alignItems:'center'}}>
                        <View style={{display: 'flex', flexDirection: 'row', marginTop: 24}}>
                            <Text style={{color: 'gray', fontSize: 16,}}>Belum punya akun?</Text>
                            <TouchableOpacity >
                                <Text onPress={() => navigation.replace('Register')} style={{color: 'blue', fontSize: 16, paddingLeft: 12, textDecorationLine: 'underline'}}>Daftar disini</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        </View>
    );
};