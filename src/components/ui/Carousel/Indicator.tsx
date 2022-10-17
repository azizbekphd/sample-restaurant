import React from 'react';
import {View, ViewProps} from 'react-native';
import {useMyTheme} from '../../../themes';
import {RenderItemProps} from './RenderItem';

type IndicatorProps = {
  count: number;
  current: number;
};

const Indicator = ({
  count,
  current,
  style,
  ...props
}: IndicatorProps &
  JSX.IntrinsicClassAttributes<View> &
  Readonly<ViewProps>) => {
  const theme = useMyTheme();

  return (
    <View
      {...props}
      style={[{flexDirection: 'row', justifyContent: 'center'}, style]}>
      {Array(count)
        .fill(1)
        .map((v, i) => {
          let diff = current - i;
          return (
            <View
              key={i.toString()}
              style={{
                height: 2,
                marginHorizontal: 2,
                backgroundColor:
                  Math.round(diff) === 0
                    ? theme.colors.primary
                    : theme.colors.border,
                width: Math.abs(diff) < 1 ? 24 - Math.abs((diff % 1) * 8) : 16,
              }}
            />
          );
        })}
    </View>
  );
};

export default Indicator;
