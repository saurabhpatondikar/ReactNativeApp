import React from 'react'
import {Colors} from '../../Constants/colors'
import {SizeConst} from '../../Constants/SizeConst'
import SwipeButton from 'rn-swipe-button'
import {FontSize} from '../../Constants/FontSize'

const SwipeButtons=(props)=>{
    onSwipeNext=(navigate,screen)=>{
        navigate.navigate(screen)
    }
return (
    <SwipeButton width={SizeConst.Percentage_80} height={SizeConst.Size_60} title={props.title} titleFontSize={FontSize.Font_16} railStyles={{
        backgroundColor: props.BackColor,
    }} thumbIconBackgroundColor={Colors.DarkColor} onSwipeSuccess={()=>onSwipeNext(props.navigate,props.ScreenName)} shouldResetAfterSuccess={true} containerStyles={{backgroundColor:Colors.WhiteColor}}  />
)
}
export default SwipeButtons