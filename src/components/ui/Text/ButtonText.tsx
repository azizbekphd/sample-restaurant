import React from 'react';
import textStyles from './TextStyles';
import TextView from './_base';

const ButtonText = ({children, ...props}: {children: string, color: string}) => (
  <TextView style={textStyles.button} {...props}>{children}</TextView>
);

export default ButtonText;