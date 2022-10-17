import * as React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import Carousel from '../ui/Carousel';

function NewsCarousel() {
    const width = Dimensions.get('window').width;
    return (
        <View style={{ flex: 1 }}>
            <Carousel items={[
                {source: require("../../assets/img/carousel_item.png"), key: "1"},
                {source: require("../../assets/img/carousel_item.png"), key: "2"},
                {source: require("../../assets/img/carousel_item.png"), key: "3"},
                {source: require("../../assets/img/carousel_item.png"), key: "4"},
                {source: require("../../assets/img/carousel_item.png"), key: "5"},
            ]}/>
        </View>
    );
}

export default NewsCarousel;
