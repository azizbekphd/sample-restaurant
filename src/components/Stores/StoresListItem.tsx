import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Store} from '../../models';
import {useMyTheme} from '../../themes';
import globalStyle from '../ui/globalStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Label, Subtitle} from '../ui/Text';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../screens';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import ListTile from '../ui/ListTile';

type StoresListItemProps = {
  store: Store;
};

const StoresListItem = ({store}: StoresListItemProps) => {
  const theme = useMyTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={globalStyle.card}>
      <ListTile
        onPress={() => {
          navigation.navigate('StoreDetails', {store: store});
        }}
        leading={
          <MaterialCommunityIcons
            name="storefront"
            size={20}
            color={theme.colors.icon.light}
          />
        }>
        <View>
          <Label.Medium>{store.name}</Label.Medium>
          <Subtitle>{store.address}</Subtitle>
        </View>
      </ListTile>
    </View>
  );
};

export default StoresListItem;
