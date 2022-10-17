import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  View,
} from 'react-native';
import strings from '../../../localization';
import PromotionItemModel from '../../../models/PromotionItem';
import {useMyTheme} from '../../../themes';
import {Label, Subtitle} from '../../ui/Text';

export type PromotionItemProps = {
  item: PromotionItemModel;
};

const PromotionItem = ({item}: PromotionItemProps) => {
  const theme = useMyTheme();
  return (
    <View style={style.wrapper}>
      <Image
        source={typeof item.image === 'string' ? {uri: item.image} : item.image}
      />
      <View style={style.caption}>
        <Label.Large>
          {
            strings.formatString(
              strings.promotion_item_title,
              item.productName,
              item.discount,
            ) as string
          }
        </Label.Large>
        <Subtitle>{`${item.start} - ${item.end}`}</Subtitle>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  wrapper: {
    marginBottom: 16,
    width: (Dimensions.get('window').width - 48) / 2,
  },
  caption: {
    marginTop: 8,
  },
});

export default PromotionItem;
