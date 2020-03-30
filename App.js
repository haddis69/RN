import React,{useState,useEffect} from 'react';
import {View, BackHandler, ToastAndroid, AsyncStorage}from 'react-native';
import {Router, Scene, Tabs, Lightbox, Modal, Overlay, Actions}from 'react-native-router-flux';
import SplashScreen from 'react-native-splash-screen'
import {Icon} from '@ant-design/react-native';
import Home from './Ezuzhijia/home';
import User from './Ezuzhijia/user';
import Fabu from './Ezuzhijia/fabu';
import Fenlei from './Ezuzhijia/fenlei';
import Yulan from './Ezuzhijia/yulan';
import Login from './Ezuzhijia/login';
import Zhuce from './Ezuzhijia/zhuce';
const App=()=>{
    let [isLogin,setLogin] = useState(false);
	let [isInstall,setInstall] = useState(true);
	let now = 0;
    let init=()=>{
        AsyncStorage.getItem('isInstall')
		.then(res=>{
            if(res){
                setInstall(false);
			}
		})
		// AsyncStorage.clear();
    	AsyncStorage.getItem('user')
      	.then(res=>{
        	let user=JSON.parse(res)
        	if(!user){
          	SplashScreen.hide();
        	}
        	if(user&&user.token){
                setLogin(true);
                SplashScreen.hide();
            }
		})
	}
	useEffect(()=>{
		 init()
    },[])
    let afterInstall = ()=>{
        setInstall(false)
    }
    if(isInstall){
		return <View style={{flex:1}}>
            <Yulan isFirst={afterInstall} />
		</View>
	}
    return (
        <Router
			backAndroidHandler={()=>{
				if(Actions.currentScene == '_home'){
					if(new Date().getTime()-now<2000){
						BackHandler.exitApp();
					}else{
						ToastAndroid.show('确定要退出吗',100);
						now = new Date().getTime();
						return true;
					}
				}
				else if(Actions.currentScene == 'login'){
					if(new Date().getTime()-now<2000){
						BackHandler.exitApp();
					}else{
						ToastAndroid.show('确定要退出吗',100);
						now = new Date().getTime();
						return true;
					}
				}
				else{
					console.log(Actions.currentScene)
					Actions.pop();
          			return true;
				}
				
			}}
		>
            <Overlay>
                <Modal key="modal" hideNavBar>
                    <Lightbox key="lightbox">
                        <Scene key="root">
                            <Tabs key='tabbar' hideNavBar activeTintColor='red' tabBarStyle={{backgroundColor:'#ffffff'}}>
                                <Scene key='home' hideNavBar title='首页' 
                                icon={({focused})=><Icon color={focused?'red':'grey'} name="home"/>}
                                component={Home}/>
                                <Scene key='fenlei' hideNavBar title='商品分类'
                                icon={({focused})=><Icon color={focused?'red':'grey'} name="appstore"/>}
                                component={Fenlei}/>
                                <Scene title="个人中心" icon={({focused})=><Icon color={focused?'red':'grey'} name='user'/>}>
                                    <Scene hideNavBar key='user' component={User}/>
                                    <Scene title="我的发布" hideTabBar key='fabu' component={Fabu}/>
                                </Scene>
                            </Tabs>
                        </Scene>
                    </Lightbox>
                    <Scene initial={!isLogin} key="login" component={Login}/>
                    <Scene key="zhuce" component={Zhuce}/>
                </Modal>
            </Overlay>
        </Router>
	)
}
export default App;