import React, { Component } from 'react'
import { View, Text, StyleSheet, Image,AsyncStorage } from 'react-native'
import Swiper from 'react-native-swiper';
import { Button } from '@ant-design/react-native'

export default class Yulan extends Component {
    start= ()=>{
        AsyncStorage.setItem('isInstall','true')
        this.props.isFirst();
    }

    render() {
        return (
            <Swiper loop = {false}>
                <View style={styles.slide1}>
                    <Image style={styles.img} source={require('../assets/slide1.png')}/> 
                </View>
                <View style={styles.slide1}>
                    <Image style={styles.img} source={require('../assets/slide2.png')} /> 
                </View>
                <View style={styles.slide1}>
                    <Image style={styles.img} source={require('../assets/slide3.png')} />
                    <Button onPress={this.start} style={styles.start}>
                        <Text style={{color:'black'}}>开始体验</Text>
                    </Button>
                </View>
            </Swiper>
        )
    }
}
const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: '100%',
      },
      slide1: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
      },
      start: {
        position: 'absolute',
        bottom: 150,
        width: 120,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
      },
})