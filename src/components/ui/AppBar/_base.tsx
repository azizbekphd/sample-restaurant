import React from 'react';
import {GestureResponderEvent, SafeAreaView, StyleSheet, View} from 'react-native';
import { IconButton } from '../../Buttons';
import {AppBarTitle} from '../Text';
import AppBarMenu from './AppBarMenu';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export type AppBarProps = (
  | {
      title: string;
      children?: never;
    }
  | {
      title?: never;
      children: JSX.Element;
    }
) & {
  onBackPress?: (event: GestureResponderEvent) => void;
  onMenu: (event: GestureResponderEvent) => void;
  onClose: (event: GestureResponderEvent) => void;
  leading?: JSX.Element,
  trailing?: JSX.Element,
};

const AppBarBase = (props: AppBarProps) => {
  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <View style={{flexDirection: "row", alignItems: "center", flex: 1}}>
        {props.leading}
        {typeof props.title === 'string' ? (
          <AppBarTitle>{props.title}</AppBarTitle>
        ) : (
          props.children
        )}
        </View>
        {props.trailing}
        <AppBarMenu
          onMorePress={props.onMenu}
          onClose={props.onClose}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
  },
});

export default AppBarBase;
