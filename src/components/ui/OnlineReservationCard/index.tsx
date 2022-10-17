import {Image, View} from 'react-native';
import strings from '../../../localization';
import {useMyTheme} from '../../../themes';
import OutlinedButton from '../../Buttons/OutlinedButton';
import globalStyle from '../globalStyles';
import {Label, Subtitle} from '../Text';
import Feather from 'react-native-vector-icons/Feather';

const OnlineReservationCard = ({expanded}: {expanded?: boolean}) => {
  const theme = useMyTheme();

  return (
    <View
      style={[
        globalStyle.card,
        {
          backgroundColor: theme.colors.card,
          padding: 16,
        },
      ]}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          <Label.Large>{strings.online_reservation}</Label.Large>
          <Subtitle>
            {strings.table_booking}
          </Subtitle>
        </View>
        <Image source={require('../../../assets/img/table_booking.png')} />
      </View>
      {expanded ? (
        <View
          style={{
            flexDirection: 'row',
            marginTop: 8,
          }}>
          <OutlinedButton
            title={strings.reserve_table}
            icon={
              <Feather name="calendar" size={20} color={theme.colors.primary} />
            }
          />
          <View style={{width: 8}} />
          <OutlinedButton title={strings.my_reservations} />
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

export default OnlineReservationCard;
