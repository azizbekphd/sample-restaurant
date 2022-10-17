import React from 'react';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
} from 'react-native';
import {useMyTheme} from '../../../themes';

export type RenderItemProps = {
  key: string;
  source: ImageSourcePropType;
};

const RenderItem = (props: RenderItemProps) => {
  const theme = useMyTheme();

  return (
      <Image
        source={props.source}
        style={styles.wrapper}
      />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 8,
    width: Dimensions.get('window').width - 48,
    height: (Dimensions.get('window').width - 48) / 3,
    overflow: 'hidden',
  },
});

export default RenderItem;
