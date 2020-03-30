import React, { Component } from 'react'
import { View, StyleSheet, Animated, ActivityIndicator, Text } from 'react-native'

export default class Jiazai extends Component {
    constructor(){
        super();
        this.state={
            aa:new Animated.Value(0)
        }
    }
    componentDidMount(){
        Animated.timing(this.state.aa,{
            toValue:1,
            duration:500
        }).start()
    }
    
    render(){
        return(
            <View style={styles.container}>
                <ActivityIndicator color='red' size="large"/>
                <Text>正在加载。。。</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'rgba(50,50,50,.5)',
        position:'absolute',
        left:0,
        top:0,
        right:0,
        bottom:0,
        justifyContent:'center',
        alignItems:'center'
    }
})