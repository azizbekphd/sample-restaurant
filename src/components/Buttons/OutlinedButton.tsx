import React from 'react';
import {TouchableOpacity, TouchableOpacityProps, View} from 'react-native';
import strings from '../../localization';
import {useMyTheme} from '../../themes';
import ButtonText from '../ui/Text/ButtonText';
import MyButtonProps from './MyButtonProps';

const OutlinedButton = (
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<TouchableOpacity> &
    Readonly<TouchableOpacityProps> &
    MyButtonProps,
) => {
  const theme = useMyTheme();
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.8}
      style={{
        height: 32,
        paddingHorizontal: 12,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: theme.colors.primary,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {props.icon ? <View style={{marginRight: 8}}>{props.icon}</View> : <></>}
      <ButtonText color={theme.colors.primary}>{props.title}</ButtonText>
    </TouchableOpacity>
  );
};

export default OutlinedButton;
