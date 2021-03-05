import React from 'react'
import {TouchableOpacity,Text} from 'react-native'
import {styles} from '../../Styles/styleSheet'
const ButtonsNormal=(props)=>{
    const nextScreen=(navigate,screen)=>{
        navigate.navigate(screen)
    }
return (
    <TouchableOpacity onPress={()=>nextScreen(props.navigate,props.screenName)} style={[styles.doCenter,styles.buttonDesig,{backgroundColor:props.color}]}>
        <Text style={[styles.textPress,{color:props.textColor?props.textColor:null}]}>{props.text}</Text>
     </TouchableOpacity>
)
}
export default ButtonsNormal