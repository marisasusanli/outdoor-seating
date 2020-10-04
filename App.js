import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './screens/Home';
import MainMap from './screens/Map';
import SingleRestaurant from './screens/Restaurant';
import List from './screens/List';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import favsReducer from './favoritesReducer';

const Root = createStackNavigator();
const Tab = createBottomTabNavigator();

const initialState = {
  favorites: [],
};

const store = createStore(favsReducer, initialState);

function MapNavigator() {
  return (
    <Root.Navigator>
      <Root.Screen name='Map' component={MainMap} options={{ title: 'Map' }} />
      <Root.Screen
        name='Restaurant'
        component={SingleRestaurant}
        options={{ title: 'Additional Details' }}
      />
    </Root.Navigator>
  );
}

function FavsNavigator() {
  return (
    <Root.Navigator>
      <Root.Screen
        name='Favorites'
        component={List}
        options={{ title: 'Favorites' }}
      />
      <Root.Screen
        name='Restaurant'
        component={SingleRestaurant}
        options={{ title: 'Additional Details' }}
      />
    </Root.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name='Home'
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name='home' color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name='Map'
            component={MapNavigator}
            options={{
              tabBarLabel: 'Map',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name='bullseye-arrow'
                  color={color}
                  size={26}
                />
              ),
            }}
          />
          <Tab.Screen
            name='Favorites'
            component={FavsNavigator}
            options={{
              tabBarLabel: 'Favorites',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name='cards-heart'
                  color={color}
                  size={26}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
