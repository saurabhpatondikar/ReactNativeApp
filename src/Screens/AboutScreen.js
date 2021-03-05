// @flow
import React from 'react';
import {View} from "react-native";
import {connect} from 'react-redux'
import ButtonNormal from '../Component/Buttons/ButtonsNormal'
import {screensName} from '../Constants/screenName'
import {Colors} from '../Constants/colors'
import {buttonText} from '../Constants/textButtons'
import {styles} from '../Styles/styleSheet'
import HeaderLeft from '../Component/HeadingComp/HeadingLeft'

type Props={
    name:string,
    addition:{name:string}
}
const AboutScreen=(props)=>{
    return(
        <View style={[styles.backGroundStyle]}>
            <View style={[styles.flex_05,styles.doLeft]}>
                <HeaderLeft name={props.addition?props.addition.name:""}/>
            </View>
                <View style={[styles.flex_05,styles.doCenter]}>
                <ButtonNormal navigate={props.navigation} screenName={screensName.LastScre} color={Colors.DarkColor} textColor={Colors.whiteColor} text={buttonText.nextText}/>
                <ButtonNormal navigate={props.navigation} screenName={screensName.HomeScreen} color={Colors.DarkColor} textColor={Colors.whiteColor} text={buttonText.prevText}/>
                </View>
            </View>
    )
}
const mapStateToProps=(state:Props)=>{
    const{addition}= state
    return{
        addition:addition
    };
}
export default connect(mapStateToProps)(AboutScreen)
