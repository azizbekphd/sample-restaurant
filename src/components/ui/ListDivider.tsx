import {View} from 'react-native';
import {useMyTheme} from '../../themes';

const ListDivider = () => {
  const theme = useMyTheme();

  return (
    <View
      style={{
        backgroundColor: theme.colors.border,
        height: 1,
        alignSelf: "stretch",
        marginHorizontal: 16,
      }} />
  );
};

export default ListDivider;
