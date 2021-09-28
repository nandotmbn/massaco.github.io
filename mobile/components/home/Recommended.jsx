import { View, Image, Text, StyleSheet, ActivityIndicator } from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler'
import React, {useLayoutEffect, useState} from 'react';

export default function Recommended({navigation}) {
	const [cards, setCards] = useState([]);
    const [animate, setAnimate] = useState(true);

    const getData = async () => {
        await fetch('https://mas-saco.herokuapp.com/api/hospital')
            .then(res => {
                return res.json();
            })
            .then(json => {
				const listed = json.sort((a,b) => (a.persentase > b.persentase) ? 1 : ((b.persentase > a.persentase) ? -1 : 0));
                setCards(listed);
            })
            .catch(error => console.log(error))
            .finally(() => {
                setAnimate(false)
            })
			
    }

    const cardList = () => {
		if (cards.length > 0) {
			return (
				<TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Form Pendaftaran Swab Test', cards[0] && cards[0])}>
					<View style={{flex: 1}}>
						<Image style={{width: 129, height: 103, resizeMode: 'stretch'}} source={{uri: cards[0] && cards[0].picture}}/>
						<Text style={{fontWeight: 'bold', width: '100%', color: 'white'}}>{cards[0] && cards[0].nama}</Text>
					</View>
					<View style={{marginLeft: 8, flex: 1}}>
						<View style={{flexDirection: 'row'}}>
							<Text style={{fontSize: 12, color: 'white'}}>Kepadatan Orang :</Text>
							<Text style={{ fontSize: 12, marginLeft: 8, color: 'white', fontWeight: 'bold'}}>{cards[0] && cards[0].keramaian}</Text>
						</View>
						<View style={{flexDirection: 'row'}}>
							<Text style={{fontSize: 12, color: 'white'}}>Kapasitas Maks :</Text>
							<Text style={{ fontSize: 12, marginLeft: 8, color: 'white', fontWeight: 'bold'}}>{cards[0] && cards[0].kapasitas}</Text>
						</View>
						<Text style={{width: '100%', color: 'lightblue', marginTop: 16, fontSize: 10}}>
							{cards[0] && cards[0].lokasi}
						</Text>
					</View>
				</TouchableOpacity>
			)
		}
    }

    useLayoutEffect(() => {
        getData()
    }, []);

    return (
        <View style={{marginTop: 16, width:"90%", height: 300}}>
			<View style={{flexDirection: 'row'}}>
				<View style={{flexDirection: 'column'}}>
					<Text style={styles.articleText}>Rekomendasi fasilitas kesehatan</Text>
					<Text style={styles.articleText}>untuk anda</Text>
				</View>
				<ActivityIndicator size='large' color='blue' animating={animate} />
			</View>
			{
				cardList()
			}
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
		height: 32,
		backgroundColor: 'blue',
      	fontSize: 16,
    },
	boxInsideScroll : {
		width: 200,
		flex: 1,
		marginHorizontal: 16,
		justifyContent: 'center',
		alignItems: 'center'
	},
	articleText: {
		paddingLeft: 16,
		fontSize: 14,
		fontWeight: 'bold',
	},
	card: {
        flexDirection: 'row',
        width: '100%',
        alignSelf: 'center',
        backgroundColor: '#2E5EBA',
        margin: 'auto',
        marginVertical: 8,
        borderRadius: 15,
        padding: 16
    }
});