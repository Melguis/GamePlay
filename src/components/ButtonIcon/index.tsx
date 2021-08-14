import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import {Text, Image, View} from 'react-native';

import GoogleImg from '../../../assets/google-icon.svg';
import { styles } from './styles';

type Props = RectButtonProps & {
  title: string;
}

export function ButtonIcon({ title, ...rest } : Props) {
  return(
    <RectButton style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <GoogleImg style={styles.icon} />
      </View>

      <Text style={styles.title}>
        { title }
      </Text>
    </RectButton>
  )
}