import React from 'react';
import { View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import strings from '../../localization';
import {Store} from '../../models';
import {useMyTheme} from '../../themes';
import Card from '../ui/Card';
import ListDivider from '../ui/ListDivider';
import ListTile from '../ui/ListTile';
import { BodyText, Label } from '../ui/Text';

const AdditionalData = ({store}: {store: Store}) => {
  const theme = useMyTheme();
  return (
    <Card>
      <ListTile
        leading={
          <MaterialIcons
            name="phone"
            color={theme.colors.icon.green}
            size={24}
          />
        }>
            <View>
                <BodyText>{strings.phone_number}</BodyText>
                <Label.Medium>{store.phone!}</Label.Medium>
            </View>
        </ListTile>
        <ListDivider/>

      <ListTile
        leading={
          <MaterialIcons
            name="location-on"
            color={theme.colors.icon.blue}
            size={24}
          />
        }>
            <View>
                <BodyText>{strings.address}</BodyText>
                <Label.Medium>{store.address!}</Label.Medium>
            </View>
        </ListTile>
    </Card>
  );
};

export default AdditionalData;
