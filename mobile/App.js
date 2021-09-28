import React, {useLayoutEffect} from 'react';
import { Button } from 'react-native';
import CrowdScreen from './screens/CrowdScreen';
import DistanceScreen from './screens/LocationScreen';
import Home from './screens/HomeScreen'
import Login from './screens/LoginScreen'
import Register from './screens/RegisterScreen'
import PriceScreen from './screens/PriceScreen';
import HealthFacility from './screens/HealthFacility';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {TouchableOpacity} from 'react-native-gesture-handler'
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import RegisterHF from './screens/RegisterHFScreen';
import SwabRegisterForm from './screens/SwabRegisterFormScreen';


const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen name="Login" component={Login}
				options={({navigation}) => ({
					headerStyle: {
						backgroundColor: '#2E5EBA',
						color: "white"
					},
					headerTitleStyle: {
						color: 'white'
					}
				})}	
			/>
			<Stack.Screen name="Register" component={Register}
				options={({navigation}) => ({
					headerStyle: {
						backgroundColor: '#2E5EBA',
						color: "white"
					},
					headerTitleStyle: {
						color: 'white'
					}
				})}	
			/>
			<Stack.Screen name="Home" component={Home}
				options={({navigation}) => ({
					headerStyle: {
						backgroundColor: '#2E5EBA',
						color: "white"
					},
					headerTitleStyle: {
						color: 'white'
					},
					headerRight: () => {
						return (
							<TouchableOpacity onPress={() => navigation.replace('Login')}>
								<SimpleLineIcons name="logout" size={24} color="magenta" />
							</TouchableOpacity>
						)
					}
				})}
			/>
			<Stack.Screen
				name="Keramaian"
				component={CrowdScreen}
				options={({navigation}) => ({
					headerStyle: {
						backgroundColor: '#2E5EBA',
						color: "white"
					},
					headerTitleStyle: {
						color: 'white'
					},
					headerRight: () => {
						return (
							<TouchableOpacity onPress={() => navigation.navigate('Home')}>
								<AntDesign name="home" size={24} color="white" />
							</TouchableOpacity>
						)
					}
				})}
			/>
			<Stack.Screen
				name="Lokasi"
				component={DistanceScreen}
				options={({navigation}) => ({
					headerStyle: {
						backgroundColor: '#2E5EBA',
						color: "white"
					},
					headerTitleStyle: {
						color: 'white'
					},
					headerRight: () => {
						return (
							<TouchableOpacity onPress={() => navigation.navigate('Home')}>
								<AntDesign name="home" size={24} color="white" />
							</TouchableOpacity>
						)
					}
				})}
			/>
			<Stack.Screen
				name="Harga"
				component={PriceScreen}
				options={({navigation}) => ({
					headerStyle: {
						backgroundColor: '#2E5EBA',
						color: "white"
					},
					headerTitleStyle: {
						color: 'white'
					},
					headerRight: () => {
						return (
							<TouchableOpacity onPress={() => navigation.navigate('Home')}>
								<AntDesign name="home" size={24} color="white" />
							</TouchableOpacity>
						)
					}
				})}
			/>
			<Stack.Screen
				name="Fasilitas Kesehatan"
				component={HealthFacility}
				options={({navigation}) => ({
					headerStyle: {
						backgroundColor: '#2E5EBA',
						color: "white"
					},
					headerTitleStyle: {
						color: 'white'
					},
					headerRight: () => {
						return (
							<TouchableOpacity onPress={() => navigation.navigate('Home')}>
								<AntDesign name="home" size={24} color="white" />
							</TouchableOpacity>
						)
					}
				})}
			/>
			<Stack.Screen
				name="Pendaftaran Swab Test"
				component={RegisterHF}
				options={({navigation}) => ({
					headerStyle: {
						backgroundColor: '#2E5EBA',
						color: "white"
					},
					headerTitleStyle: {
						color: 'white'
					},
					headerRight: () => {
						return (
							<TouchableOpacity onPress={() => navigation.navigate('Home')}>
								<AntDesign name="home" size={24} color="white" />
							</TouchableOpacity>
						)
					}
				})}
			/>
			<Stack.Screen
				name="Form Pendaftaran Swab Test"
				component={SwabRegisterForm}
				options={({navigation}) => ({
					headerStyle: {
						backgroundColor: '#2E5EBA',
						color: "white"
					},
					headerTitleStyle: {
						color: 'white'
					},
					headerRight: () => {
						return (
							<TouchableOpacity onPress={() => navigation.navigate('Home')}>
								<AntDesign name="home" size={24} color="white" />
							</TouchableOpacity>
						)
					}
				})}
			/>
		</Stack.Navigator>
		</NavigationContainer>
	);
}