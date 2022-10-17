import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import StoresList from '../components/Stores/StoresList';
import FilledAppBar from '../components/ui/AppBar/Filled';
import Screen from '../components/ui/Screen';
import SearchBar from '../components/ui/SearchBar';
import {storesDemo} from '../demos';
import strings from '../localization';
import {Store} from '../models';

const StoresScreen = () => {
  const [queryText, setQueryText] = useState<string>('');
  const [stores, setStores] = useState<Array<Store>>();

  const loadStores = () => {
    setTimeout(() => {
      setStores(storesDemo);
    }, 1000);
  };

  useEffect(() => {
    loadStores();
  }, []);

  return (
    <Screen>
      <FilledAppBar
        onMenu={() => {}}
        onClose={() => {}}
        onBackPress={queryText ? ()=>{setQueryText("")} : undefined}
        title={queryText ? strings.search_stores : strings.stores}
        bottom={
          <View style={{margin: 16, marginTop: 0}}>
            <SearchBar
              autoFocus={false}
              value={queryText}
              onChangeText={setQueryText}
              callback={setQueryText}
              placeholder={strings.search_stores}
            />
          </View>
        }
      />
      <StoresList items={stores} query={queryText} />
    </Screen>
  );
};

export default StoresScreen;
