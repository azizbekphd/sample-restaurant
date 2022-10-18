import React from 'react';
import {
  GestureResponderEvent,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {AppBarTitle} from '../Text';
import AppBarMenu from './AppBarMenu';

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
  leading?: JSX.Element;
  trailing?: JSX.Element;
};

const AppBarBase = (props: AppBarProps) => {
  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
          <View style={{marginRight: 8}}>{props.leading}</View>
          {typeof props.title === 'string' ? (
            <AppBarTitle>{props.title}</AppBarTitle>
          ) : (
            props.children
          )}
        </View>
        <View style={{marginRight: 8}}>{props.trailing}</View>
        <AppBarMenu onMorePress={props.onMenu} onClose={props.onClose} />
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
