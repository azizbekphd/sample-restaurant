import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, ScrollView, View} from 'react-native';
import {Store} from '../../models';
import search from '../../utils/search';
import NotFound from './NotFound';
import StoresListItem from './StoresListItem';

type StoresListProps = {
  query?: string;
  items?: Array<Store>;
};

const StoresList = ({query, items}: StoresListProps) => {
  const [list, setList] = useState<Array<Store>>();

  useEffect(() => {
    if (items) {
      setList(search(items, ['name', 'address'], query ?? ''));
    } else {
      setList(undefined);
    }
  }, [items, query]);

  return (
    <>
      {list === undefined ? (
        <View style={{padding: 16}}>
          <ActivityIndicator />
        </View>
      ) : list.length === 0 ? (
        <NotFound />
      ) : (
        <ScrollView style={{marginVertical: 10}}>
          {list.map(store => (
            <StoresListItem store={store} key={store.id.toString()} />
          ))}
        </ScrollView>
      )}
    </>
  );
};

export default StoresList;
