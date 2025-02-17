import React from 'react';
import {
  SafeAreaView,
  ScrollView
} from 'react-native';
import Actioncard from './components/Actioncard';
import ContactList from './components/ContactList';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import FlatCards from './components/FlatCards';


function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <ContactList />
        <Actioncard />
      </ScrollView>
    </SafeAreaView>
  )
};



export default App;
