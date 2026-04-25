import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppNavigator from './src/presentation/navigation/AppNavigator';
import { theme } from './src/shared/theme/theme';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.primary}
      />
      <AppNavigator />
    </SafeAreaProvider>
  );
}

export default App;
