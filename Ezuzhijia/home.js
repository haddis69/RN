import React from 'react';
import {View,Text,Image,TextInput,TouchableOpacity, ScrollView}from 'react-native';
const Home=()=>{
	return(
		<ScrollView >
		<View style={{height:800}}>
		
            <View style={{
				width:'100%',
				height:60,
				backgroundColor:'rgb(242,48,48)',
				alignItems:'center',
				flexDirection:'row',
				justifyContent:'center'}}>
				<View style={{
					width:'80%',
					height:40,
					backgroundColor:'rgb(251,184,184)',
					flexDirection:'row',
					borderRadius:100,
					alignItems:'center',
					paddingLeft:10}}>
					<Image style={{
						width:25,
						height:25,
						color:'white'}} source={require('../assets/search2.png')} />
					<TextInput placeholderTextColor='white' placeholder='请输入您要搜索的关键字'/>	
				</View>
				<Image style={{
					width:35,
					height:35,
					color:'white',
					marginLeft:15}} source={require('../assets/shopcar.png')} />
			</View>
			<View style={{width:'100%',height:200}}>
				<Image style={{width:'100%',height:'100%'}}
				source={require('../assets/new.png')} />
			</View>
			
			<View style={{width:'100%',height:80,backgroundColor:'white',
			flexDirection:'row',alignItems:'center',marginTop:5}}>
				<View style={{width:60,height:60,borderRadius:60,
				backgroundColor:'rgb(255,204,204)',marginLeft:20,
				justifyContent:'center',alignItems:'center'}}>
					<Image style={{width:'60%',height:'60%'}}
					source={require('../assets/weixiu.png')} />
				</View>
				<Text style={{marginLeft:20}}>居家维修保养</Text>
			</View>
			<View style={{width:'100%',height:80,backgroundColor:'white',
			flexDirection:'row',alignItems:'center',marginTop:5}}>
				<View style={{width:60,height:60,borderRadius:60,
				backgroundColor:'rgb(255,225,177)',marginLeft:20,
				justifyContent:'center',alignItems:'center'}}>
					<Image style={{width:'60%',height:'60%'}}
					source={require('../assets/zhusu.png')} />
				</View>
				<Text style={{marginLeft:20}}>住宿优惠</Text>
			</View>
			<View style={{width:'100%',height:80,backgroundColor:'white',
			flexDirection:'row',alignItems:'center',marginTop:5}}>
				<View style={{width:60,height:60,borderRadius:60,
				backgroundColor:'rgb(191,230,168)',marginLeft:20,
				justifyContent:'center',alignItems:'center'}}>
					<Image style={{width:'60%',height:'60%'}}
					source={require('../assets/chuxing.png')} />
				</View>
				<Text style={{marginLeft:20}}>出行接送</Text>
			</View>
			<View style={{width:'100%',height:80,backgroundColor:'white',
			flexDirection:'row',alignItems:'center',marginTop:5}}>
				<View style={{width:60,height:60,borderRadius:60,
				backgroundColor:'rgb(195,221,242)',marginLeft:20,
				justifyContent:'center',alignItems:'center'}}>
					<Image style={{width:'60%',height:'60%'}}
					source={require('../assets/huodong.png')} />
				</View>
				<Text style={{marginLeft:20}}>E族活动</Text>
			</View>
			<View style={{width:'100%',height:120,justifyContent:'center',
			alignItems:'center'}}>
				<TouchableOpacity style={{
					width:'80%',height:40,borderRadius:4,
					justifyContent:'center',alignItems:'center',
					backgroundColor:'rgb(242,48,48)'}}>
					<Text style={{color:'white'}}>发布需求</Text>
				</TouchableOpacity>
				<Text style={{marginTop:10}}>@E族之家 版权所有</Text>

			</View>
		
		</View>
		</ScrollView>
	)
}
export default Home;