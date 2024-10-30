
import React, { useState } from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomNavigationMenu from './BottomNavigaiton';




const Stack = createNativeStackNavigator();





function App(): React.JSX.Element {


  return (



      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen options={{ headerShown: false }} name="Anasayfa" component={BottomNavigationMenu} />

        </Stack.Navigator>
      </NavigationContainer>



  );
}



export default App;