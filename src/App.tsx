import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LoginContext } from './components/AuthRoute/LoginContext';
import { DataContext } from './components/navbar/DataContext';

// import { ThemeProvider } from 'styled-components';
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import { useMantineTheme } from '@mantine/core';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all';

import MainPage from './pages/MainPage';
import NotFound from './pages/NotFound';
import ComingSoon from './pages/ComingSoon';
import MainFooter from './components/footer';
import { links as footerLinks } from './components/footer/links';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import MainPageHeader from './components/Headers/MainPageHeader';
import MainNavbar from './components/navbar/MainNavbar';
import HorzPubBanner from './components/Banners/HorizontalPubBanner';
import { mainNavbarLinks } from './components/navbar';

function App() {
  /*
   * set the global style and provide the toggle function to switch the theme state
   */
  // const [theme, toggleTheme] = useTheme();
  // const [theme, toggleTheme] = useMantineTheme();

  // const globalThemeToProvide = theme === 'light' ? lightTheme : darkTheme;
  /*
   * set the user as not login
   */
  const [isAuth, setIsAuth] = useState(false);
  const [lastUpdateTime, setLastUpdateTime] = useState();
  const [coinsInfos, setCoinsInfos] = useState({
    dictionary: [],
    list: [],
  });

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'dark',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  const refreshUpdateTime = (
    newUpdateTime: React.SetStateAction<undefined>
  ) => {
    setLastUpdateTime(newUpdateTime);
  };

  return (
    <>
      {/* <ThemeContext.Provider value={{ theme, toggleTheme }}> */}
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          <LoginContext.Provider value={{ isAuth, setIsAuth }}>
            <DataContext.Provider value={{ coinsInfos, setCoinsInfos }}>
              <BrowserRouter>
                <div className='globalContainer container-fluid'>
                  <MainPageHeader
                    lastUpdateTime={lastUpdateTime}
                    refreshUpdateTime={refreshUpdateTime}
                  />
                  <MainNavbar links={mainNavbarLinks} />

                  <HorzPubBanner />
                  <Switch>
                    <Route
                      exact
                      strict
                      path='(/|/cryptomarketparrot)(/|)'
                      component={MainPage}
                    />
                    <Route exact path='/coin/:id/:type' component={MainPage} />

                    <Route path='/about' component={MainPage} />

                    <Route path='/(exchanges||learn)' component={ComingSoon} />

                    <Route path='*' component={NotFound} />
                  </Switch>

                  <MainFooter data={footerLinks?.data}></MainFooter>
                </div>
              </BrowserRouter>
            </DataContext.Provider>
          </LoginContext.Provider>
        </MantineProvider>
      </ColorSchemeProvider>
      {/* </ThemeContext.Provider> */}
    </>
  );
}

export default App;
