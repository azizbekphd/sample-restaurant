import {StyleProp, Text, TextStyle} from 'react-native';
import {useMyTheme} from '../../../themes';

export type TextViewProps = {
  children: string;
  color?: string;
  style?: StyleProp<TextStyle>;
};

const TextView = ({
  children,
  color,
  style,
}: TextViewProps) => {
  const theme = useMyTheme();

  return (
    <Text
      style={[style, {fontFamily: 'Inter', color: color ?? theme.colors.text}]}>
      {children}
    </Text>
  );
};

export default TextView;
