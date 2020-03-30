import React, { Component } from 'react'
import {ScrollView,View,Text,Image,AsyncStorage,TouchableOpacity}from 'react-native';
import { Actions } from 'react-native-router-flux';
import ImagePicker from 'react-native-image-picker';

export default class User extends Component {
	constructor(){
		super();
		this.state = { 
			pictuer:'',
			isloading:false
		}
	}
	takephoto=()=>{
		ImagePicker.showImagePicker({
			title:'请选择',
			cancelButtonTitle:'取消',
			chooseFromLibraryButtonTitle:'选择相册',
			takePhotoButtonTitle:'拍照'
		},(res) => {
			AsyncStorage.setItem('pic', res.uri)
			this.setState({pictuer:{uri:res.uri}})
		})
	}
	
    componentDidMount(){
		AsyncStorage.getItem('pic').then((res)=>{
			this.setState({pictuer:{ uri:res }})
        })
	}
	render() {
		return(
			<View>
			<ScrollView>
				<View style={{width:'100%',height:200,
				backgroundColor:'rgb(242,48,48)',
				justifyContent:'center',alignItems:'center'}}>
					<TouchableOpacity style={{
						width:102,height:102,borderRadius:100,
						backgroundColor:'white',
						justifyContent:'center',alignItems:'center'}} onPress={()=>{this.takephoto()}}>
						<Image style={{width:100,height:100,borderRadius:100}} 
						source={this.state.pictuer}/>
					</TouchableOpacity>
					<Text style={{marginTop:10,color:'white',fontSize:18}}>BINNU DHILLON</Text>
				</View>
				<View style={{width:'100%',height:45,backgroundColor:'white',
				flexDirection:'row',alignItems:'center'}}>
					<Image style={{marginLeft:10}} source={require('../assets/icon.png')}/>
					<Text style={{marginLeft:10}}>我的个人中心</Text>
				</View>
				<View style={{
					flexDirection:'row',
					justifyContent:'flex-start',
					flexWrap:'wrap',
					height:300,
					width:'100%',
					backgroundColor:'white',
					marginTop:2
					}}>
					<View style={{width:'33%',height:90,backgroundColor:"rgb(255,255,255)",
					alignItems:'center',justifyContent:'center'}}>
						<Image source={require('../assets/icon1.png')}/>
						<Text style={{marginTop:10}}>账户管理</Text>
					</View>
					<View style={{width:'33%',height:90,backgroundColor:"rgb(255,255,255)",
					alignItems:'center',justifyContent:'center'}}>
						<Image source={require('../assets/icon2.png')}/>
						<Text style={{marginTop:10}}>收货地址</Text>
					</View>
					<View style={{width:'33%',height:90,backgroundColor:"rgb(255,255,255)",
					alignItems:'center',justifyContent:'center'}}>
						<Image source={require('../assets/icon3.png')}/>
						<Text style={{marginTop:10}}>我的信息</Text>
					</View>
					<View style={{width:'33%',height:90,backgroundColor:"rgb(255,255,255)",
					alignItems:'center',justifyContent:'center'}}>
						<Image source={require('../assets/icon4.png')}/>
						<Text style={{marginTop:10}}>我的订单</Text>
					</View>
					<View style={{width:'33%',height:90,backgroundColor:"rgb(255,255,255)",
					alignItems:'center',justifyContent:'center'}}>
						<Image source={require('../assets/icon5.png')}/>
						<Text style={{marginTop:10}}>我的二维码</Text>
					</View>
					<View style={{width:'33%',height:90,backgroundColor:"rgb(255,255,255)",
					alignItems:'center',justifyContent:'center'}}>
						<Image source={require('../assets/icon6.png')}/>
						<Text style={{marginTop:10}}>我的积分</Text>
					</View>
					<View style={{width:'33%',height:90,backgroundColor:"rgb(255,255,255)",
					alignItems:'center',justifyContent:'center'}}>
						<Image source={require('../assets/icon7.png')}/>
						<Text style={{marginTop:10}}>我的收藏</Text>
					</View>
				</View>
				<View style={{width:'100%',height:45,backgroundColor:'white',
				flexDirection:'row',alignItems:'center',marginTop:6}}>
					<Image style={{marginLeft:10}} source={require('../assets/icon8.png')}/>
					<Text style={{marginLeft:10}}>E族活动</Text>
				</View>
				<View style={{
					flexDirection:'row',
					justifyContent:'flex-start',
					flexWrap:'wrap',
					height:200,
					width:'100%',
					backgroundColor:'white',
					marginTop:2
					}}>
					<View style={{width:'33%',height:90,backgroundColor:"rgb(255,255,255)",
					alignItems:'center',justifyContent:'center'}}>
						<Image source={require('../assets/icon9.png')}/>
						<Text style={{marginTop:10}}>居家维修保养</Text>
					</View>
					<View style={{width:'33%',height:90,backgroundColor:"rgb(255,255,255)",
					alignItems:'center',justifyContent:'center'}}>
						<Image source={require('../assets/icon10.png')}/>
						<Text style={{marginTop:10}}>出行接送</Text>
					</View>
					<View style={{width:'33%',height:90,backgroundColor:"rgb(255,255,255)",
					alignItems:'center',justifyContent:'center'}}>
						<Image source={require('../assets/icon11.png')}/>
						<Text style={{marginTop:10}}>我的受赠人</Text>
					</View>
					<View style={{width:'33%',height:90,backgroundColor:"rgb(255,255,255)",
					alignItems:'center',justifyContent:'center'}}>
						<Image source={require('../assets/icon12.png')}/>
						<Text style={{marginTop:10}}>我的住宿优惠</Text>
					</View>
					<View style={{width:'33%',height:90,backgroundColor:"rgb(255,255,255)",
					alignItems:'center',justifyContent:'center'}}>
						<Image source={require('../assets/icon13.png')}/>
						<Text style={{marginTop:10}}>我的活动</Text>
					</View>
                    <View style={{width:'33%',height:90,backgroundColor:"rgb(255,255,255)",
                    alignItems:'center',justifyContent:'center'}}>
						<TouchableOpacity style={{alignItems:'center',justifyContent:'center'}} onPress={()=>Actions.fabu()} >
                            <Image source={require('../assets/icon14.png')}/>
                            <Text style={{marginTop:10}}>我的发布</Text>
                        </TouchableOpacity>
						
					</View>
				</View>
				<View style={{
					justifyContent:'center',
					alignItems:'center',
					height:80,
					width:'100%'}}>
						<Text onPress={()=>{
						AsyncStorage.removeItem('user')
						Actions.login();
						}}>退出</Text>
				</View>
				
			</ScrollView>
			{
            this.state.isloading?<Jiazai></Jiazai>:null
        }
			</View>
	)
}
}