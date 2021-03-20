//@flow
import React from 'react';
import Slider from 'react-native-slide-to-unlock';
import {Text, View, Image} from 'react-native';
import {Styles} from '../../Styles/StyleSheet';

type Props = {
  navigate: any,
  ScreenName: string,
  title: string,
  BackColor: any,
};
const SliderButtons = (props: Props) => {
  const onSwipeNext = (navigate, screen) => {
    navigate.navigate(screen);
  };
  return (
    <Slider
      isLeftToRight={true}
      onEndReached={() => onSwipeNext(props.navigate, props.ScreenName)}
      containerStyle={{
        backgroundColor: props.BackColor,
        ...Styles.DoCenter,
        ...Styles.SwipeContainer,
      }}
      sliderElement={
        <View style={[Styles.SliderStyle, Styles.DoCenter]}>
          <Image
            source={require('../../Assets/diamond.png')}
            style={[Styles.SliderImage]}
          />
        </View>
      }>
      <Text style={[Styles.TextPress, Styles.TextColor]}>{props.title}</Text>
    </Slider>
  );
};
export default SliderButtons;
