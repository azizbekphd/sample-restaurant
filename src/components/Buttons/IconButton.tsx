import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

const IconButton = (
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<TouchableOpacity> &
    Readonly<TouchableOpacityProps> & {children: JSX.Element},
) => {
  return <TouchableOpacity {...props} activeOpacity={0.8}></TouchableOpacity>;
};

export default IconButton;
