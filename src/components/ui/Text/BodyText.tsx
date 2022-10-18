import React from 'react';
import textStyles from './TextStyles';
import TextView from './_base';

const BodyText = ({children, ...props}: {children: string}&any) => (
  <TextView style={[textStyles.body]} {...props}>{children}</TextView>
);

export default BodyText;