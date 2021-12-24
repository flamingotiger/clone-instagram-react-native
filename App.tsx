/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigators/main';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
	// Window Focus Refetching
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
});

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
