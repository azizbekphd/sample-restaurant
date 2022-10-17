import React from 'react';
import {StyleSheet, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useMyTheme} from '../../../themes';
import { IconButton } from '../../Buttons';
import AppBarBase, {AppBarProps} from './_base';

type FilledAppBarProps = AppBarProps & {
  bottom?: JSX.Element;
};

const FilledAppBar = ({
  title,
  bottom,
  onMenu,
  onClose,
  onBackPress,
}: FilledAppBarProps) => {
  const theme = useMyTheme();

  return (
    <View
      style={{
        backgroundColor: theme.colors.card,
      }}>
      <AppBarBase
        title={title!}
        leading={
          onBackPress ? <IconButton onPress={onBackPress}>
            <MaterialIcons name="arrow-back-ios" size={18} color={theme.colors.icon.dark}/>
          </IconButton> : <></>
        }
        onMenu={onMenu}
        onClose={onClose} />
      {bottom}
    </View>
  );
};

export default FilledAppBar;
