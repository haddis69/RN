import React from 'react';
import {StyleSheet,ScrollView,View,Text,Image,TextInput}from 'react-native';
const Fenlei=()=>{
	return(
		<View>
			<View style={{
				width:'100%',
				height:60,
				backgroundColor:'white',
				flexDirection:'row',
				justifyContent:'center'}}>
				<View style={{
					width:'80%',
					height:40,
					marginTop:10,
					backgroundColor:'rgb(238,238,238)',
					flexDirection:'row',
					borderRadius:2,
					alignItems:'center',
					paddingLeft:10}}>
					<TextInput placeholderTextColor='rgb(191,192,193)' placeholder='请输入商品名称'/>
					<Image style={{
						marginLeft:'60%',
						width:20,
						height:20}} source={require('../assets/search.png')} />
				</View>
			</View>
			<View style={{
				flexDirection:'row',
				justifyContent:'space-evenly',
				flexWrap:'wrap',
				height:50,
				width:'100%',
				backgroundColor:'white',
				marginTop:2}}>
				<Text style={{color:'red',marginTop:15,fontSize:15}}>综合</Text>
				<Text style={{marginTop:15,fontSize:15}}>销量</Text>
				<Text style={{marginTop:15,fontSize:15}}>新品</Text>
				<Text style={{marginTop:15,fontSize:15}}>价格</Text>
				<Text style={{marginTop:15,fontSize:15}}>信用</Text>
			</View>
			<ScrollView>
				<View style={{
					flexDirection:'row',
					justifyContent:'space-evenly',
                    flexWrap:'wrap',
                    height:950}}>
					<View style={styles.box}>
						<Image style={{marginLeft:'15%',marginTop:'5%',width:'80%',height:'60%'}}source={require('../assets/chips.png')} />
						<Text style={{marginLeft:'5%',width:'90%',marginTop:'10%'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
						<Text style={{color:'red',marginLeft:'5%',marginTop:'5%'}}>36.00</Text>
					</View>
					<View style={styles.box}>
						<Image style={{marginLeft:'15%',marginTop:'5%',width:'70%',height:'60%'}}source={require('../assets/chips.png')} />
						<Text style={{marginLeft:'5%',width:'90%',marginTop:'10%'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
						<Text style={{color:'red',marginLeft:'5%',marginTop:'5%'}}>36.00</Text>
					</View>
					<View style={styles.box}>
						<Image style={{marginLeft:'15%',marginTop:'5%',width:'70%',height:'60%'}}source={require('../assets/chips.png')} />
						<Text style={{marginLeft:'5%',width:'90%',marginTop:'10%'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
						<Text style={{color:'red',marginLeft:'5%',marginTop:'5%'}}>36.00</Text>
					</View>
					<View style={styles.box}>
						<Image style={{marginLeft:'15%',marginTop:'5%',width:'70%',height:'60%'}}source={require('../assets/chips.png')} />
						<Text style={{marginLeft:'5%',width:'90%',marginTop:'10%'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
						<Text style={{color:'red',marginLeft:'5%',marginTop:'5%'}}>36.00</Text>
					</View>
					<View style={styles.box}>
						<Image style={{marginLeft:'15%',marginTop:'5%',width:'70%',height:'60%'}}source={require('../assets/chips.png')} />
						<Text style={{marginLeft:'5%',width:'90%',marginTop:'10%'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
						<Text style={{color:'red',marginLeft:'5%',marginTop:'5%'}}>36.00</Text>
					</View>
					<View style={styles.box}>
						<Image style={{marginLeft:'15%',marginTop:'5%',width:'70%',height:'60%'}}source={require('../assets/chips.png')} />
						<Text style={{marginLeft:'5%',width:'90%',marginTop:'10%'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
						<Text style={{color:'red',marginLeft:'5%',marginTop:'5%'}}>36.00</Text>
					</View>
				</View>
			</ScrollView>
		</View>
	)
}
const styles = StyleSheet.create({
	box:{width:'45%',
		height:250,
		marginTop:'3%',
		backgroundColor:'white'
	}
});
export default Fenlei;