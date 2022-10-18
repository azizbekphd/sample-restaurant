import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '.';
import FilledAppBar from '../components/ui/AppBar/Filled';
import Screen from '../components/ui/Screen';
import strings from '../localization';

type OrderDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'OrderDetails'
>;

const OrderDetailsScreen = ({navigation, route}: OrderDetailsScreenProps) => {
  return (
    <Screen>
      <FilledAppBar
        onMenu={() => {}}
        onClose={() => {}}
        onBackPress={() => {
          navigation.goBack();
        }}
        title={`${strings.order} ${route.params.order.id}`}
      />
      
    </Screen>
  );
};

export default OrderDetailsScreen;
