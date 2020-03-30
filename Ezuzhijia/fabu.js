import React, { Component } from 'react'
import {View,Text,ToastAndroid,TouchableOpacity} from 'react-native'
import Jiazai from './jiazai'
export default class Fabu extends Component {
    constructor(){
        super()
        this.state={
            page:1,
            title:[],
            ans:['已回复','待回复'],
            isloading:true
        }
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?limit=13&page=1')
        .then(res=>res.json())
        .then(res=>{
            this.setState({isloading:false})
            this.setState({title:res.data})})
    }
    next=()=>{
        this.setState({page:this.state.page+1})
        fetch('https://cnodejs.org/api/v1/topics?limit=13&page='+this.state.page)
        .then(res=>res.json())
        .then(res=>{this.setState({title:res.data})})
    }
    last=()=>{
        this.setState({page:this.state.page-1})
        if(this.state.page==0){
            ToastAndroid.show('空',100);
            this.setState({page:1})
        }
        fetch('https://cnodejs.org/api/v1/topics?limit=13&page='+this.state.page)
        .then(res=>res.json())
        .then(res=>{this.setState({title:res.data})})
    }
    render() {
        return (
            <View style={{width:'100%',height:'100%'}}>
            {
                this.state.isloading?<Jiazai></Jiazai>:null
            }
            <View style={{backgroundColor:"white"}}>
                
                {
                    this.state.title.map((item)=>(
                        <View style={{height:40,flexDirection:'row',alignContent:'center'}}>
                            <Text style={{width:'50%',marginLeft:'2%'}}>
                                {item.title.slice(0,15)+"..."}
                            </Text>
                            <Text style={{marginLeft:'15%'}}>
                                {item.create_at.slice(0,10)}
                            </Text>
                            <Text style={{marginLeft:'5%'}}>
                                {
                                    Math.round(Math.random(0,1))<1?<Text style={{color:'red'}}>待回复</Text>:<Text>已回复</Text>
                                }
                            </Text>
                        </View>
                        )
                    )
                }
                <View style={{flexDirection:'row',justifyContent:"center"}}>
                    <TouchableOpacity onPress={()=>this.last()}
                    style={{width:'30%',height:30,
                    borderRadius:30,alignItems:'center',backgroundColor:'red'}}>
                        <Text style={{color:'white'}}>上一页</Text>
                    </TouchableOpacity>
                    <Text>第{this.state.page}页</Text>
                    <TouchableOpacity onPress={()=>this.next()}
                    style={{width:'30%',height:30,
                        borderRadius:30,alignItems:'center',backgroundColor:'red'}}>
                        <Text style={{color:'white'}}>下一页</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
        )
    }
}