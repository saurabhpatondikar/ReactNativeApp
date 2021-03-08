//@flow
import React from 'react'
import {TouchableOpacity,Text, Button} from 'react-native'
import {styles} from '../../Styles/StyleSheet'
type ButtonType={
    ButtonsNormal:Button
}
const ButtonsNormal=(props)=>{
    const nextScreen=(navigate,screen)=>{
        navigate.navigate(screen)
    }
return (
    <TouchableOpacity onPress={()=>nextScreen(props.navigate,props.ScreenName)} style={[styles.DoCenter,styles.ButtonDesig,{backgroundColor:props.color}]}>
        <Text style={[styles.TextPress,{color:props.TextColor?props.TextColor:null}]}>{props.text}</Text>
     </TouchableOpacity>
)
}
export default ButtonsNormal