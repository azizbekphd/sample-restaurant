import {SafeAreaView} from 'react-native';
import AppBarBase, {AppBarProps} from './_base';

const TransparentAppBar = ({children, onMenu, onClose}: AppBarProps) => {
  return (
    <AppBarBase onMenu={onMenu} onClose={onClose}>
      <SafeAreaView>{children!}</SafeAreaView>
    </AppBarBase>
  );
};

export default TransparentAppBar;
