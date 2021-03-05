import {StyleSheet} from 'react-native'
import {Colors} from '../Constants/colors'
export const styles=StyleSheet.create({
    doCenter:{justifyContent:'center',alignItems:'center'},
    doLeft:{justifyContent:'flex-start',alignItems:'flex-end'},
    buttonDesig:{width:'80%',height:60,margin:5,borderRadius:10},
    textPress:{color:'#2196F3',fontSize:16},
    backGroundStyle:{padding:10,flex:1,backgroundColor:Colors.backGrouColor},
    textInputField:{alignSelf:'center',width:'70%',height:56,marginTop:15,borderWidth:1,borderRadius:10,backgroundColor:Colors.whiteColor},
    flex_05:{flex:0.5},
    padding_05:{padding:5},
    justConFlexStrt:{justifyContent:'flex-start'},
    alFlexEnd:{alignSelf:'flex-end'}
})