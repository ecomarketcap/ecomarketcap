import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { DataContext } from './components/navbar/DataContext';

// import { ThemeProvider } from 'styled-components';
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all';

import MainPage from './pages/MainPage';
import NotFound from './pages/NotFound';
import ComingSoon from './pages/ComingSoon';
import MainFooter from './components/footer';
import { links as footerLinks } from './components/footer/links';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import MainNavbar from './components/navbar/MainNavbar';
import { mainNavbarLinks } from './components/navbar';
import InfoBanner from './components/banner/InfoBanner';
import { MarketHeader } from './components/header';
import About from './pages/About';
import FeaturesCards from './components/about';
import Team from './components/about/team';
import { theme } from './theme/theme';

function App() {
  const [coinsInfos, setCoinsInfos] = useState({
    list: [],
  });

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider theme={{ ...theme }} withGlobalStyles withNormalizeCSS>
          <DataContext.Provider value={{ coinsInfos, setCoinsInfos }}>
            <BrowserRouter>
              <InfoBanner />
              <MarketHeader />
              <MainNavbar links={mainNavbarLinks} />
              <Switch>
                <Route
                  exact
                  strict
                  path="(/|/ecomarketcap)(/|)"
                  component={MainPage}
                />
                <Route path="/about">
                  <Switch>
                    <Route exact path="/about" component={About} />
                    <Route path="/about/company" component={FeaturesCards} />
                    <Route path="/about/team" component={Team} />
                  </Switch>
                </Route>
                <Route exact path="/coin/:id/:type" component={MainPage} />
                <Route path="/(exchanges||learn)" component={ComingSoon} />
                <Route path="*" component={NotFound} />
              </Switch>
              <MainFooter data={footerLinks?.data}></MainFooter>
            </BrowserRouter>
          </DataContext.Provider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

export default App;
