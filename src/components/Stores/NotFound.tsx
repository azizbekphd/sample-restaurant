import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import strings from '../../localization';
import {useMyTheme} from '../../themes';
import {Label} from '../ui/Text';

const NotFound = () => {
  const theme = useMyTheme();

  return (
    <View
      style={[
        style.wrapper,
        {
          backgroundColor: theme.colors.card,
        },
      ]}>
      <Image
        source={require('../../assets/img/not_found.png')}
        style={style.image}
      />
      <Label.Large>{strings.not_found_title}</Label.Large>
      <Label.Medium style={{fontWeight: "normal", marginTop: 2}}>{strings.not_found_subtitle}</Label.Medium>
    </View>
  );
};

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    marginBottom: 24,
  },
});

export default NotFound;
