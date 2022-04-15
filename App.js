
import GTW_screen from './components/List';
import SettingsScreen from './components/SettingsScreen';
import ScannerScreen from './components/ScannerScreen';


import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Tab = createMaterialBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ size, color }) => {
            let iconName;
            if (route.name === 'Hem') {
              iconName = 'home';
              size = 25;
            } else if (route.name === 'Scan') {
              iconName = 'barcode';
              size = 25;
            } else if (route.name === 'Inställningar') {
              iconName = 'cog';
              size = 25;            
            }
            return (
              <FontAwesome5
                name={iconName}
                size={size}
                color={color}
              />
            )
          }
        })}
        activeColor='#f0edf6'
        barStyle={{ backgroundColor: 'white' }}
      >
        <Tab.Screen
          name="Hem"
          component={GTW_screen}
        />
        <Tab.Screen
          name="Scan"
          component={ScannerScreen}
        />
        <Tab.Screen
          name="Inställningar"
          component={SettingsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;