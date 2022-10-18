import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useMyTheme} from '../../themes';

type ListTileProps = {
  leading: React.ReactNode;
  trailing?: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  children: React.ReactNode;
};

const ListTile = ({onPress, leading, trailing, children}: ListTileProps) => {
  const theme = useMyTheme();

  return (
    <TouchableOpacity
      activeOpacity={onPress ? 0.8 : 1}
      onPress={onPress}
      style={[
        style.wrapper,
        {
          backgroundColor: theme.colors.card,
        },
      ]}>
      {leading}
      <View style={{marginLeft: 10, flex: 1}}>{children}</View>
      {trailing}
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  wrapper: {
    justifyContent: "space-between",
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

export default ListTile;
