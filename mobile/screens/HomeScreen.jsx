import {Text, View, Image } from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import BoxInsideCurve from '../components/home/BoxInsideCurve';
import Feature from '../components/home/Feature';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Recommended from '../components/home/Recommended';

const homeStyle = require('../styles/home');
const isLogin = true;

export default function Home({navigation}) {
	const [dataUser, setDataUser] = useState({});
	const getDataUser = async () => {
		try {
			const result = await AsyncStorage.getItem('dataUser')
			setDataUser(JSON.parse(result));
		} catch (error) {
			console.log(error);
		}
	}
	useLayoutEffect(() => {
		if(!isLogin) {
			navigation.replace('Login');
		}
		getDataUser();
	}, [])
	return (
		<View style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
			<View style={homeStyle.default.curveHead}>
				<Text style={{marginTop: 500, marginBottom: 16, color: 'white', fontSize: 20}}>Hello {dataUser.username}</Text>
				<BoxInsideCurve navigation={navigation} />
				<Feature navigation={navigation}/>
				<Recommended navigation={navigation}/>
			</View>
			<View style={{flex: 5}} />
		</View>
	);
};