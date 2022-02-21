import React from 'react';

import useCachedResources from './hooks/useCachedResources';
import { AppProvider } from './src/App.Provider';
import { AppNavigator } from './src/components/navigator/AppNavigator';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <AppProvider>
        <AppNavigator />
      </AppProvider>
    );
  }
}
