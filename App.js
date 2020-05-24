import React from 'react';

//Packages
import 'react-native-gesture-handler';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { NavigationContainer } from '@react-navigation/native';

// Screens
import MainScreen from './screens/MainScreen';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createSharedElementStackNavigator();


const App = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="MainScreen"
      screenOptions={{
        headerShown:false
      }}

      >
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={navigation => ({
            headerBackTitleVisible: false,
            cardStyleInterpolator:({current: {progress}}) =>{
              return {
                cardStyle:{
                  opacity:progress
                }
              }
            }
          })}
          sharedElementsConfig = {(route) =>{
            const {data} = route.params;

            return[
              {
                id:`item.${item.id}.photo`,
                animation:'move',
                resize:'clip',
                align:'center-top'
              },
              {
                id:`item.${item.id}.text`,
                animation:'fade',
                resize:'clip',
                align:'center-top'
              },
              {
                id:`item.${item.id}.profilePic`,
                animation:'move',
                resize:'clip',
                align:'center-top'
              },
              {
                id:`item.${item.id}.username`,
                animation:'fade',
                resize:'clip',
                align:'center-top'
              },
              {
                id:`item.${item.id}.readtime`,
                animation:'fade',
                resize:'clip',
                align:'center-top'
              }
            ]
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
