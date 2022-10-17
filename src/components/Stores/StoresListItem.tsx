import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Store} from '../../models';
import {useMyTheme} from '../../themes';
import globalStyle from '../ui/globalStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Label, Subtitle} from '../ui/Text';

type StoresListItemProps = {
  store: Store;
};

const StoresListItem = ({store}: StoresListItemProps) => {
  const theme = useMyTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        globalStyle.card,
        style.wrapper,
        {
          backgroundColor: theme.colors.card,
        },
      ]}>
      <MaterialCommunityIcons
        name="storefront"
        size={20}
        color={theme.colors.icon.light}
        style={{marginRight: 10}}
      />
      <View>
        <Label.Medium>{store.name}</Label.Medium>
        <Subtitle>
          {store.address}
        </Subtitle>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

export default StoresListItem;
