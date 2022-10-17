import React from 'react';
import textStyles from './TextStyles';
import TextView from './_base';

const AppBarTitle = ({children}: {children: string}) => (
  <TextView style={[textStyles.appBarTitle, {flex: 1}]}>{children}</TextView>
);

export default AppBarTitle;
