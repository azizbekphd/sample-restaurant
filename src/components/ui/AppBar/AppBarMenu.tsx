import React from 'react';
import {GestureResponderEvent, StyleSheet, View} from 'react-native';
import {useMyTheme} from '../../../themes';
import Feather from 'react-native-vector-icons/Feather';
import {IconButton} from '../../Buttons';

const AppBarMenu = ({
  onMorePress,
  onClose,
}: {
  onMorePress: (event: GestureResponderEvent) => void;
  onClose: (event: GestureResponderEvent) => void;
}) => {
  const theme = useMyTheme();

  return (
    <View
      style={[
        style.wrapper,
        {
          backgroundColor: theme.colors.appbar.menu,
        },
      ]}>
      <IconButton onPress={onMorePress}>
        <Feather
          name="more-horizontal"
          size={16}
          color={theme.colors.icon.dark}
        />
      </IconButton>
      <View
        style={{
          height: 16,
          width: 1,
          marginHorizontal: 8,
          backgroundColor: theme.colors.border,
        }}
      />
      <IconButton onPress={onClose}>
        <Feather name="x-circle" size={16} color={theme.colors.icon.dark} />
      </IconButton>
    </View>
  );
};

const style = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    borderRadius: 24,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});

export default AppBarMenu;
