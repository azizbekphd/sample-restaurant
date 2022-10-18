import React from 'react';
import {SafeAreaView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useMyTheme } from '../../../themes';
import { IconButton } from '../../Buttons';
import AppBarBase, {AppBarProps} from './_base';

const TransparentAppBar = ({
  children,
  onMenu,
  onClose,
  onBackPress,
}: AppBarProps) => {
  const theme = useMyTheme()

  return (
    <AppBarBase
      onMenu={onMenu}
      onClose={onClose}
      leading={
        onBackPress ? (
          <IconButton onPress={onBackPress} style={{
            backgroundColor: theme.colors.appbar.back,
            paddingLeft: 8,
            borderRadius: 16,
            width: 32,
            height: 32,
            justifyContent: "center",
            alignItems: "center"
          }}>
            <MaterialIcons
              name="arrow-back-ios"
              size={18}
              color={theme.colors.icon.dark}
            />
          </IconButton>
        ) : (
          <></>
        )
      }>
      <SafeAreaView>{children!}</SafeAreaView>
    </AppBarBase>
  );
};

export default TransparentAppBar;
