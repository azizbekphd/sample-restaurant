import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';
import {useMyTheme} from '../../themes';
import {Label} from './Text';

function MyTopTabBar({
  state,
  descriptors,
  navigation,
  position,
}: MaterialTopTabBarProps) {
  const theme = useMyTheme();

  return (
    <View
      style={[
        style.wrapper,
        {
          backgroundColor: theme.colors.card,
        },
      ]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true, params: {}});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              style.item,
              isFocused
                ? {
                    borderBottomColor: theme.colors.primary,
                    borderBottomWidth: 1,
                  }
                : {},
            ]}
            key={index.toString()}>
            <Label.Medium
              color={
                isFocused ? theme.colors.primary : theme.colors.icon.semidark
              }
              style={{
                fontWeight: isFocused ? '700' : '400',
              }}>
              {label as string}
            </Label.Medium>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const style = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    height: 45,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyTopTabBar;
