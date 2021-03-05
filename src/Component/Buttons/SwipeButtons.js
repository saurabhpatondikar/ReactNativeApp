import React from 'react'
import {Colors} from '../../Constants/colors'
import {sizeConst} from '../../Constants/sizeConst'
import SwipeButton from 'rn-swipe-button'
import {fontSize} from '../../Constants/fontSize'

const SwipeButtons=(props)=>{
    onSwipeNext=(navigate,screen)=>{
        navigate.navigate(screen)
    }
return (
    <SwipeButton width={sizeConst.percentage80} height={sizeConst.size60} title={props.title} titleFontSize={fontSize.font16} railStyles={{
        backgroundColor: props.backColor,
    }} thumbIconBackgroundColor={Colors.DarkColor} onSwipeSuccess={()=>onSwipeNext(props.navigate,props.screenName)} shouldResetAfterSuccess={true} containerStyles={{backgroundColor:Colors.whiteColor}}  />
)
}
export default SwipeButtons