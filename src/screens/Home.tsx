import React from 'react';
import {ScrollView} from 'react-native';
import TransparentAppBar from '../components/ui/AppBar/Transparent';
import NewsCarousel from '../components/Home/NewsCarousel';
import WelcomeTitle from '../components/Home/Welcome';
import Screen from '../components/ui/Screen';
import PurchaseMethods from '../components/PurchaseMethods';
import OnlineReservationCard from '../components/ui/OnlineReservationCard';
import PromotionCampaign from '../components/Home/PromotionCampaign';

const HomeScreen = () => {
  return (
    <Screen>
      <ScrollView>
        <TransparentAppBar
          onMenu={()=>{}}
          onClose={()=>{}}
        >
          <WelcomeTitle />
        </TransparentAppBar>
        <NewsCarousel />
        <PurchaseMethods />
        <OnlineReservationCard expanded={true} />
        <PromotionCampaign />
      </ScrollView>
    </Screen>
  );
};

export default HomeScreen;
