import React from 'react';
import {TouchableOpacity, TouchableOpacityProps, View} from 'react-native';
import {useMyTheme} from '../../themes';
import ButtonText from '../ui/Text/ButtonText';
import MyButtonProps from './MyButtonProps';

const FilledButton = (
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
      style={[{
        height: 40,
        alignSelf: "stretch",
        borderRadius: 20,
        backgroundColor: theme.colors.primary,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 16,
      },props.style]}>
      {props.icon ? <View style={{marginRight: 8}}>{props.icon}</View> : <></>}
      <ButtonText color={theme.colors.reverse}>{props.title}</ButtonText>
    </TouchableOpacity>
  );
};

export default FilledButton;
