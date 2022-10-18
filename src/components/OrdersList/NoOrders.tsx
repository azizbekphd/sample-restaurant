import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import strings from '../../localization';
import {useMyTheme} from '../../themes';
import {FilledButton} from '../Buttons';
import {BodyText, Label} from '../ui/Text';

const NoOrders = () => {
  const theme = useMyTheme();

  return (
    <View
      style={[
        StyleSheet.absoluteFillObject,
        {backgroundColor: theme.colors.card},
      ]}>
      <View style={style.content}>
        <Image
          source={require('../../assets/img/cup.png')}
          style={style.image}
        />
        <Label.Large>{strings.no_orders_title}</Label.Large>
        <BodyText>{strings.no_order_subtitle}</BodyText>
        <FilledButton title={strings.order_now} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  content: {
    marginVertical: 76,
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    marginBottom: 24,
  },
});

export default NoOrders;
