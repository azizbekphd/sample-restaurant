import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {ScrollView, View} from 'react-native';
import PurchaseMethods from '../components/ui/PurchaseMethods';
import StoreDetailsMainPanel from '../components/StoreDetails/MainPanel';
import TransparentAppBar from '../components/ui/AppBar/Transparent';
import OnlineReservationCard from '../components/ui/OnlineReservationCard';
import Screen from '../components/ui/Screen';
import RootStackParamList from './types';
import AdditionalData from '../components/StoreDetails/AdditionalData';

type StoreDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'StoreDetails'
>;

const StoreDetailsScreen = ({navigation, route}: StoreDetailsScreenProps) => {
  return (
    <Screen>
      <ScrollView>
        <TransparentAppBar
          onMenu={() => {}}
          onClose={() => {}}
          onBackPress={() => {
            navigation.pop();
          }}>
          <></>
        </TransparentAppBar>
        <StoreDetailsMainPanel store={route.params.store} />
        <PurchaseMethods />
        <OnlineReservationCard />
        <AdditionalData store={route.params.store} />
        <View style={{height: 50}}/>
      </ScrollView>
    </Screen>
  );
};

export default StoreDetailsScreen;
