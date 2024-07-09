/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, ScrollView} from 'react-native';

import FlatCards from './components/FlatCards';
import ElavatedCards from './components/ElavatedCards';
import FancyCard from './components/FancyCard';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElavatedCards />
        <FancyCard />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
