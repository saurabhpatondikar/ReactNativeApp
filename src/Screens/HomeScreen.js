//@flow

import * as React from 'react'
import {useState} from 'react'
import {View,Text,TextInput} from "react-native";
import SimpleButton from '../Component/Buttons/ButtonsNormal'
import SwipeButton from '../Component/Buttons/SwipeButtons'
import {connect} from 'react-redux'
import {storeAction} from "../Action/storeAction";
import {screensName} from '../Constants/screenName'
import {Colors} from '../Constants/colors'
import {buttonText} from '../Constants/textButtons'
import {styles} from '../Styles/styleSheet'

type Props={
    name:string,
    nameEnter:string,
}
type stateProp={
    addition:{name:string}
}
const Home=(props)=>{
    const [name,setName]=useState('')
    const [nameEnter,setNameEnter]=useState('')
   const handleTextChange=(text:string)=>{
          props.dispatch(storeAction({name:text}))
          setNameEnter(text)
      }
      
    return(
        <View style={[styles.backGroundStyle]}>
            
               <View style={[styles.flex_05,styles.justConFlexStrt]}>
                   <View style={[styles.alFlexEnd]}><Text style={[styles.textPress]}>{props.addition?props.addition.name:''}</Text></View>
                   <TextInput value={nameEnter} style={[styles.textInputField]} placeholder={buttonText.placText} onChangeText={(text)=>handleTextChange(text)} onBlur={()=>setNameEnter('')}/>
               </View>
               <View style={[styles.flex_05,styles.padding_05,styles.doCenter]}>
                   <SimpleButton navigate={props.navigation} screenName={screensName.AboutScre} color={Colors.Transparent} textColor={Colors.DarkColor} text={buttonText.pressText}/>
                   <SimpleButton navigate={props.navigation} screenName={screensName.AboutScre} color={Colors.greyColor} textColor={Colors.DarkColor} text={buttonText.pressText}/>
                   <SimpleButton navigate={props.navigation} screenName={screensName.AboutScre} color={Colors.DarkColor} textColor={Colors.whiteColor} text={buttonText.pressText}/>
                   <SwipeButton title={buttonText.slideText} backColor={Colors.Transparent} navigate={props.navigation} screenName={screensName.AboutScre}/>
               </View>
           </View>
    )
}

const mapStateToProps=(state:stateProp)=>{
const {addition}= state
    return{
    addition:addition
    }
}
export default connect(mapStateToProps)(Home)