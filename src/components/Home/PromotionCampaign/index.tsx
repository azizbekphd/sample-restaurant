import React, { useEffect, useState } from 'react';
import {StyleSheet, View} from 'react-native';
import { promotionItemsDemo } from '../../../demos';
import strings from '../../../localization';
import PromotionItemModel from '../../../models/PromotionItem';
import globalStyle from '../../ui/globalStyles';
import {SectionTitle} from '../../ui/Text';
import PromotionItem from './PromotionItem';

const PromotionCampaign = () => {
    const [items, setItems] = useState<Array<PromotionItemModel>>()

    useEffect(()=>{
        setItems(promotionItemsDemo)
    }, [])

    if (!items || items.length === 0) {
        return <></>
    }
  return (
    <View style={globalStyle.card}>
      <SectionTitle>{strings.promotion_campaign}</SectionTitle>
      <View style={style.grid}>
        {items.map((item)=>
            <PromotionItem item={item} key={item.id.toString()}/>
        )}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: 8,
    }
})

export default PromotionCampaign;
