import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components';
import './config/reactotron';

import Routes from './routes';
import {theme as themes} from './common';

const App = () => {
  const deviceTheme = useColorScheme();
  const theme = themes[deviceTheme] || themes.dark;
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        translucent={false}
        barStyle="light-content"
        backgroundColor={theme.statusBarColor}
      />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
