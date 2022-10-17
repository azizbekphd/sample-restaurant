import React, {createRef, useEffect, useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Indicator from './Indicator';
import RenderItem, {RenderItemProps} from './RenderItem';
import SnapCarousel from 'react-native-snap-carousel';

type CarouselProps = {
  items: Array<RenderItemProps>;
};

const Carousel = (props: CarouselProps) => {
  const [current, setCurrent] = useState(0);
  const snapCarousel = createRef<SnapCarousel<RenderItemProps>>();

  const _renderItem = ({item}: any) => <RenderItem {...item} />;

  useEffect(() => {
    snapCarousel.current?.snapToItem(current);
    const timer = setTimeout(() => {
      setCurrent((current + 1) % props.items.length);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [current]);

  return (
    <View style={styles.wrapper}>
      <SnapCarousel
        loop
        ref={snapCarousel}
        data={props.items}
        renderItem={_renderItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width - 32}
        snapToAlignment="center"
        onBeforeSnapToItem={i => {
          setCurrent(i);
        }}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
      />
      <Indicator
        count={props.items.length}
        current={current}
        style={styles.indicator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  carousel: {
    marginHorizontal: 20,
    overflow: 'visible',
  },
  indicator: {
    margin: 24,
    marginBottom: 16,
    height: 2,
    width: Dimensions.get('window').width,
  },
});

export default Carousel;
