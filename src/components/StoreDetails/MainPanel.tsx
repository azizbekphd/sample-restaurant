import React, {useEffect, useState} from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import strings from '../../localization';
import {Store} from '../../models';
import {useMyTheme} from '../../themes';
import {IconButton} from '../Buttons';
import globalStyle from '../ui/globalStyles';
import ImageLoader from '../ui/ImageLoader';
import {ButtonText, Label} from '../ui/Text';

const StoreDetailsMainPanel = ({store}: {store: Store}) => {
  const theme = useMyTheme();

  const [like, setLike] = useState<boolean>(store.like ?? false);
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    setLike(store.like ?? false);
  }, [store]);

  return (
    <View
      style={[
        globalStyle.card,
        {
          flexDirection: 'column',
        },
      ]}>
      {store.images && store.images.length > 0 ? (
        <View>
          <Carousel
            loop
            data={store.images!}
            onSnapToItem={setPage}
            layout="stack"
            inactiveSlideOpacity={1}
            sliderWidth={Dimensions.get('window').width - 32}
            itemWidth={Dimensions.get('window').width - 32}
            renderItem={({item, index}: {item: string; index: number}) => {
              return (
                <ImageLoader
                  uri={item}
                  width={Dimensions.get('window').width - 32}
                  height={Dimensions.get('window').width - 32}
                />
              );
            }}></Carousel>
          <View
            style={[style.indicator, {backgroundColor: theme.colors.overlay}]}>
            <ButtonText color={theme.colors.reverse}>{`${page + 1}/${
              store.images.length
            }`}</ButtonText>
          </View>
        </View>
      ) : (
        <></>
      )}
      <View style={[style.data, {backgroundColor: theme.colors.card}]}>
        <View style={style.text}>
          <Label.Large>{store.name}</Label.Large>
          <Label.Medium style={{fontWeight: 'normal'}}>
            {strings.formatString(strings.open_time, store.open!) as string}
          </Label.Medium>
        </View>
        <IconButton
          onPress={() => {
            setLike(!like);
          }}>
          {like ? (
            <MaterialIcons
              name="favorite"
              color={theme.colors.notification}
              size={20}
            />
          ) : (
            <MaterialIcons
              name="favorite-outline"
              color={theme.colors.icon.semidark}
              size={20}
            />
          )}
        </IconButton>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  data: {
    padding: 16,
    paddingTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    flex: 1,
  },
  indicator: {
    overflow: 'hidden',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    position: 'absolute',
    right: 12,
    bottom: 12,
  },
});

export default StoreDetailsMainPanel;
