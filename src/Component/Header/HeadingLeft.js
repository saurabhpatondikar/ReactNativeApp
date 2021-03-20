// @flow
import React from 'react';
import {Text, View} from 'react-native';
import {Styles} from '../../Styles/StyleSheet';
type Props = {
  name: string,
};
const HeaderLeft = (props: Props) => {
  return (
    <View>
      <Text style={[Styles.TextHeader]}>{props.name}</Text>
    </View>
  );
};
export default HeaderLeft;
