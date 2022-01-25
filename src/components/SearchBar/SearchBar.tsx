import React from 'react';
import { View, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchValue } from '../../selectors/selectors';
import { setSearchValue } from '../../features/employeesSlice';

import { Icon } from 'react-native-elements';

import styles from './styles';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(selectSearchValue);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon
          name="search-outline"
          type="ionicon"
          color="#BFBFBF"
          size={20}
          tvParallaxProperties={undefined}
        />
      </View>
      <TextInput
        style={styles.textInput}
        placeholder="Search"
        value={searchValue}
        onChangeText={(text) => dispatch(setSearchValue(text))}
        clearButtonMode="always"
        returnKeyType="done"
      />
    </View>
  );
};
