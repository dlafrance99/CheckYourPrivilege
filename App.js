import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import ReceiptScreen from './src/Screens/ReceiptScreen';
import PeopleScreen from './src/Screens/PeopleScreen';
import SplitScreen from './src/Screens/SplitScreen';
import AdvancedDemoScreen from './src/Screens/AdvancedDemoScreen';
import { ReceiptProvider } from './src/Context/ReceiptContext';
import InformationScreen from './src/Screens/InformationScreen';


const navigator = createSwitchNavigator({
  Receipt: ReceiptScreen,
  People: PeopleScreen,
  Split: SplitScreen,
  Advanced: AdvancedDemoScreen,
  Info: InformationScreen
}, {
  initialRouteName: 'Receipt',
  defaultNavigationOptions: {
    headerShown: false
  }
})

const App = createAppContainer(navigator)

export default () => {
  return (
    <ReceiptProvider>
      <App />
    </ReceiptProvider>
  )
}