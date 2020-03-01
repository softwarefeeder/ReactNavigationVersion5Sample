import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './screens/Home'
import UserDetail from '../src/screens/UserDetail'
import Settings from '../src/screens/Settings'

const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          gestureEnabled: true,
          headerStyle: {
            backgroundColor: '#3380FF'
          },
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerTintColor: '#FFF333',
          headerBackTitleVisible: false
        }}
        headerMode='float'>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ title: 'Home Page' }}
        />
        <Stack.Screen
          name='UserDetail'
          component={UserDetail}
          options={({ route }) => ({
            title: route.params.item.detailName
          })}
        />
        <Stack.Screen
          name='Settings'
          component={Settings}
          options={{ title: 'Settings' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator
