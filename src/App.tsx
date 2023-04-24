import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LoginContext } from './components/AuthRoute/LoginContext';
import { DataContext } from './components/NavBars/DataContext';

// import { ThemeProvider } from 'styled-components';
import { MantineProvider } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all';

import MainPage from './pages/MainPage';
import NotFoundPage from './pages/otherpages/NotFoundPage';
import ComingSoonPage from './pages/otherpages/ComingSoonPage';
import MainFooter from './components/footer';
import { links as footerLinks } from './components/footer/links';

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
  const [coinsInfos, setCoinsInfos] = useState({
    dictionary: [],
    list: [],
  });

  return (
    <>
      {/* <ThemeContext.Provider value={{ theme, toggleTheme }}> */}
      <MantineProvider
        theme={{ colorScheme: 'dark' }}
        withGlobalStyles
        withNormalizeCSS
      >
        <LoginContext.Provider value={{ isAuth, setIsAuth }}>
          <DataContext.Provider value={{ coinsInfos, setCoinsInfos }}>
            <BrowserRouter>
              <div className='globalContainer container-fluid'>
                <Switch>
                  <Route
                    exact
                    strict
                    path='(/|/cryptomarketparrot)(/|)'
                    component={MainPage}
                  />
                  <Route exact path='/coin/:id/:type' component={MainPage} />

                  <Route path='/about' component={MainPage} />

                  <Route
                    path='/(exchange||products||tools||signup)'
                    component={ComingSoonPage}
                  />

                  <Route path='*' component={NotFoundPage} />
                </Switch>

                <MainFooter data={footerLinks?.data}></MainFooter>
              </div>
            </BrowserRouter>
          </DataContext.Provider>
        </LoginContext.Provider>
      </MantineProvider>
      {/* </ThemeContext.Provider> */}
    </>
  );
}

export default App;
