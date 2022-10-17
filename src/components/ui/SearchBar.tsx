import React, {useState} from 'react';
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import textStyles from './Text/TextStyles';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useMyTheme} from '../../themes';
import IconButton from '../Buttons/IconButton';

const SearchBar = (
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<TextInput> &
    Readonly<TextInputProps> & {
      callback: Function;
    },
) => {
  const theme = useMyTheme();
  const [focused, setFocused] = useState(props.autoFocus);

  return (
    <View
      style={[
        styles.wrapper,
        {
          borderColor: theme.colors.border,
          borderWidth: focused ? 2 : 1,
        },
      ]}>
      <Feather
        name="search"
        size={24}
        color={theme.colors.icon.semidark}
        style={styles.searchIcon}
      />
      <TextInput
        {...props}
        style={[textStyles.input, {flex: 1}]}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {props.value ? (
        <IconButton>
          <MaterialIcons
            name="clear"
            size={24}
            color={theme.colors.icon.semidark}
            onPress={() => {
              props.callback('');
            }}
          />
        </IconButton>
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 4,
  },
  searchIcon: {
    marginHorizontal: 8,
  },
});

export default SearchBar;
