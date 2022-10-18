import React, {useState} from 'react';
import {ImageBackground} from 'react-native';
import globalStyle from './globalStyles';
import { Label } from './Text';

type ImageLoaderProps = {
  uri: string;
  width: number;
  height: number;
};

const ImageLoader = ({uri, width, height}: ImageLoaderProps) => {

  return (
    <ImageBackground
      source={{uri: uri, width: width, height: height}}
      style={[
        globalStyle.center,
        {
          width: width,
          height: height,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        },
      ]}>
      </ImageBackground>
  );
};

export default ImageLoader;
