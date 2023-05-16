// import React, { useState, useContext } from 'react';
// import { NavLink, withRouter } from 'react-router-dom';
// // import { ThemeContext } from "../ThemeToggler/ThemeContext";
// import { lightTheme, darkTheme } from '../../theme';

// import styled from 'styled-components';
// import { useMantineColorScheme, useMantineTheme } from '@mantine/styles';

// /**
//  * Styles
//  */
// const LiTab = styled.li`
//   font-size: 0.8rem;
//   font-weight: bold;
//   height: 1.5rem;
//   line-height: 0.2rem;
// `;
// const LiWatchlist = styled(LiTab)`
//   min-width: 8vw;
// `;
// const LiMarkets = styled(LiTab)`
//   min-width: 8vw;
// `;
// const LiCrypto = styled(LiTab)`
//   min-width: 12vw;
// `;

// const Nav = styled.nav`
//   .filter,
//   .filter div,
//   ul,
//   ul div {
//     background-color: var(--bgColor);
//   }
//   .filter div,
//   ul div {
//     font-size: 0.7rem;
//   }
//   .filter {
//     * {
//       padding: 0;
//       margin: 0;
//     }
//     label {
//       color: var(--txtColor);
//       padding-top: 0.5rem;
//     }
//     input {
//       margin-bottom: 0.5rem;
//     }
//     .container {
//       width: 600px;
//       margin-left: -70%;
//     }
//     #btn-filter {
//       //width: 5vw;
//       margin-top: 0.9rem;
//     }
//     a {
//       color: var(--txtColor);
//     }
//   }
// `;
// const BtnMenu = styled.button`
//   border: none;
//   font-weight: bold;
//   background-color: var(--bgColor);
// `;
// const BtnCurMenu = styled.button`
//   border: none;
//   color: var(--txtColor);
//   background-color: var(--containerColor);
//   :hover {
//     background-color: var(--containerColor);
//     color: var(--txtColor);
//     font-weight: bold;
//   }
// `;
// const Btn = styled.button`
//   font-size: 0.7rem;
//   height: 1.5rem;
//   background-color: var(--bgColor);
//   :hover {
//     font-weight: bold;
//   }
// `;
// const BtnCur = styled(Btn)`
//   min-width: 8vw;
//   color: var(--txtColor);
//   :hover {
//     color: var(--txtColor);
//   }
// `;
// const BtnFilter = styled(Btn)`
//   min-width: 8vw;
//   color: var(--txtColor);
//   :hover {
//     color: var(--txtColor);
//   }
// `;
// const BtnPage = styled(Btn)`
//   min-width: 5.5vw;
// `;

// /**
//  *
//  * CoinRanking navbar
//  *
//  * @todo modify a to btn in menu
//  */
// const CoinRankingNavBar = (props) => {
//   /**
//    * States
//    */
//   const { theme } = useMantineTheme();

//   const [isDownDevise, setIsDownDevise] = useState(false);
//   const [isDownFilter, setIsDownFilter] = useState(false);

//   const menuDeviseClass = 'dropdown-menu' + (isDownDevise ? ' show' : '');
//   const triggerBtnMenu = 'btn btn-sm btn-outline-light dropdown-toggle';
//   const itemUSDClass =
//     'dropdown-item' + (props.devise === 'USD' ? ' active' : '');
//   const itemBTCClass =
//     'dropdown-item' + (props.devise === 'BTC' ? ' active' : '');

//   const menuFilterClass = 'dropdown-menu' + (isDownFilter ? ' show' : '');
//   const triggerFilterMenu = 'btn btn-sm btn-outline-light dropdown-toggle';

//   const btnPagePrvClass =
//     'btn btn-sm btn-outline-light text-primary' +
//     (props.page.current === 0 ? ' disabled' : '');
//   const btnPageNxtClass =
//     'btn btn-sm btn-outline-light text-primary' +
//     (props.page.current === props.page.last - 1 ? ' disabled' : '');
//   /*to remove the original dropdown box*/
//   const filterBckgrndColor = { backgroundColor: `transparent`, border: 'none' };

//   const pageStyle =
//     theme === 'light'
//       ? { backgroundColor: lightTheme.body, borderColor: lightTheme.border }
//       : { backgroundColor: darkTheme.body, borderColor: darkTheme.border };

//   const toggleDropDownDevise = () => {
//     setIsDownDevise((oldValue) => !oldValue);
//   };
//   const toggleDropDownFilter = () => {
//     setIsDownFilter((oldValue) => !oldValue);
//   };
//   /**
//    * get vs_currency to pass to parent
//    */
//   const toggleDeviseUSD = () => {
//     props.toggleDevise('USD');
//   };
//   const toggleDeviseBTC = () => {
//     props.toggleDevise('BTC');
//   };

//   /**
//    * get filters to pass to parent
//    */
//   const changeFilter = () => {
//     props.changeFilter(
//       document.getElementById('minCapInput').value
//         ? document.getElementById('minCapInput').value
//         : 0,
//       document.getElementById('maxCapInput').value
//         ? document.getElementById('maxCapInput').value
//         : 999999999999,
//       document.getElementById('minSupInput').value
//         ? document.getElementById('minSupInput').value
//         : 0,
//       document.getElementById('maxSupInput').value
//         ? document.getElementById('maxSupInput').value
//         : 999999999999,
//       document.getElementById('minVarDayInput').value
//         ? document.getElementById('minVarDayInput').value
//         : -100,
//       document.getElementById('maxVarDayInput').value
//         ? document.getElementById('maxVarDayInput').value
//         : 10000,
//       document.getElementById('minVarAthInput').value
//         ? document.getElementById('minVarAthInput').value
//         : -100,
//       document.getElementById('maxVarAthInput').value
//         ? document.getElementById('maxVarAthInput').value
//         : 10000,
//       document.getElementById('minPriceInput').value
//         ? document.getElementById('minPriceInput').value
//         : 0,
//       document.getElementById('maxPriceInput').value
//         ? document.getElementById('maxPriceInput').value
//         : 999999999999
//     );
//   };

//   const resetFilter = () => {
//     document.getElementById('minCapInput').value = null;
//     document.getElementById('maxCapInput').value = null;
//     document.getElementById('minSupInput').value = null;
//     document.getElementById('maxSupInput').value = null;
//     document.getElementById('minVarDayInput').value = null;
//     document.getElementById('maxVarDayInput').value = null;
//     document.getElementById('minVarAthInput').value = null;
//     document.getElementById('maxVarAthInput').value = null;
//     document.getElementById('minPriceInput').value = null;
//     document.getElementById('maxPriceInput').value = null;

//     props.changeFilter(
//       0,
//       999999999999,
//       0,
//       999999999999,
//       -100,
//       10000,
//       -100,
//       10000,
//       0,
//       999999999999
//     );
//   };

//   /**
//    * get page change to pass to parent
//    */
//   const handleClickPagePrv = () => {
//     props.handleClickPage(-1);
//   };
//   const handleClickPageNxt = () => {
//     props.handleClickPage(1);
//   };

//   return (
//     <Nav className='d-flex justify-content-between' theme={theme}>
//       <div className='d-flex justify-content-end filter' style={pageStyle}>
//         <div className='dropdown filter'>
//           <BtnFilter
//             className={triggerFilterMenu}
//             style={pageStyle}
//             onClick={toggleDropDownFilter}
//             type='button'
//             id='dropdownFilterButton'
//             data-toggle='dropdown'
//             aria-haspopup='true'
//             aria-expanded='false'
//           >
//             <i className='fas fa-filter'></i>Filters
//           </BtnFilter>
//           <div
//             className={menuFilterClass}
//             style={filterBckgrndColor}
//             aria-labelledby='dropdownFilterButton'
//           >
//             <div className='container row d-flex justify-content-around'>
//               <div className='col-2'>
//                 <label htmlFor='minCapInput'>Min Cap:</label>
//                 <input
//                   id='minCapInput'
//                   type='number'
//                   placeholder={0}
//                   min={0}
//                   max={999999999999}
//                   name='minCapInput'
//                 />
//                 <label htmlFor='maxCapInput'>Max Cap:</label>
//                 <input
//                   id='maxCapInput'
//                   type='number'
//                   placeholder={999999999999}
//                   min={0}
//                   max={999999999999}
//                   name='maxCapInput'
//                 />
//               </div>
//               <div className='col-2'>
//                 <label htmlFor='minSupInput'>Min Supply:</label>
//                 <input
//                   id='minSupInput'
//                   type='number'
//                   placeholder={0}
//                   min={0}
//                   max={999999999999}
//                   name='minSupInput'
//                 />
//                 <label htmlFor='maxSupInput'>Max Supply:</label>
//                 <input
//                   id='maxSupInput'
//                   type='number'
//                   placeholder={999999999999}
//                   min={0}
//                   max={999999999999}
//                   name='maxSupInput'
//                 />
//               </div>
//               <div className='col-2'>
//                 <label htmlFor='minVarDayInput'>Min Var(h24):</label>
//                 <input
//                   id='minVarDayInput'
//                   type='number'
//                   placeholder={-100}
//                   min={-100}
//                   max={1000000}
//                   name='minVarDayInput'
//                 />
//                 <label htmlFor='maxVarDayInput'>Max Var(h24):</label>
//                 <input
//                   id='maxVarDayInput'
//                   type='number'
//                   placeholder={10000}
//                   min={-100}
//                   max={1000000}
//                   name='maxVarDayInput'
//                 />
//               </div>
//               <div className='col-2'>
//                 <label htmlFor='minVarAthInput'>Min Var(ath):</label>
//                 <input
//                   id='minVarAthInput'
//                   type='number'
//                   placeholder={-100}
//                   min={-100}
//                   max={1000000}
//                   name='minVarAthInput'
//                 />
//                 <label htmlFor='maxVarAthInput'>Max Var(ath):</label>
//                 <input
//                   id='maxVarAthInput'
//                   type='number'
//                   placeholder={10000}
//                   min={-100}
//                   max={1000000}
//                   name='maxVarAthInput'
//                 />
//               </div>
//               <div className='col-2'>
//                 <label htmlFor='minPriceInput'>Min price:</label>
//                 <input
//                   id='minPriceInput'
//                   type='number'
//                   placeholder={0}
//                   min={0}
//                   max={999999999999}
//                   name='minPriceInput'
//                 />
//                 <label htmlFor='maxPriceInput'>Max price:</label>
//                 <input
//                   id='maxPriceInput'
//                   type='number'
//                   placeholder={999999999999}
//                   min={0}
//                   max={999999999999}
//                   name='maxPriceInput'
//                 />
//               </div>
//               <div className='col-1'>
//                 <button
//                   className='btn btn-secondary btn-sm mt-3'
//                   id='btn-filter'
//                   onClick={changeFilter}
//                   type='button'
//                 >
//                   Filter
//                 </button>
//                 <button
//                   className='btn btn-secondary btn-sm mt-4'
//                   id='btn-reset'
//                   onClick={resetFilter}
//                   type='button'
//                 >
//                   Reset
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className='dropdown'>
//           <BtnCur
//             className={triggerBtnMenu}
//             style={pageStyle}
//             onClick={toggleDropDownDevise}
//             type='button'
//             id='dropdownCurButton'
//             data-toggle='dropdown'
//             aria-haspopup='true'
//             aria-expanded='false'
//           >
//             Currencies
//           </BtnCur>
//           <div className={menuDeviseClass} aria-labelledby='dropdownCurButton'>
//             <BtnCurMenu className={itemUSDClass} onClick={toggleDeviseUSD}>
//               USD
//             </BtnCurMenu>
//             <BtnCurMenu className={itemBTCClass} onClick={toggleDeviseBTC}>
//               BTC
//             </BtnCurMenu>
//           </div>
//         </div>

//         <BtnPage
//           className={btnPagePrvClass}
//           style={pageStyle}
//           onClick={handleClickPagePrv}
//         >
//           prev100
//         </BtnPage>
//         <BtnPage
//           className={btnPageNxtClass}
//           style={pageStyle}
//           onClick={handleClickPageNxt}
//         >
//           next100
//         </BtnPage>
//       </div>
//     </Nav>
//   );
// };

// export default withRouter(CoinRankingNavBar);

import React, { useState } from 'react';
import {
  Col,
  Grid,
  Paper,
  Text,
  Button,
  useMantineColorScheme,
} from '@mantine/core';

import { darkTheme, lightTheme } from '../../theme';

import { CoinsRankingFilters } from '../filter';
import { FilterInputs } from '../filter/CoinsRanking/types';

interface Props {
  history: any;
  location: any;
  devise: string;
  setDevise: (devise: string) => void;
  page: { current: number; last: number };
  setPage: (page: { current: number; last: number }) => void;
  changeFilter: (filters: FilterInputs) => void;
  resetFilter: () => void;
}

const CoinRankingNavBar: React.FC<Props> = ({
  devise,
  setDevise,
  page,
  setPage,
  changeFilter,
  resetFilter,
}) => {
  const [isDownDevise, setIsDownDevise] = useState(false);
  const [isDownFilter, setIsDownFilter] = useState(false);

  const toggleDropDownDevise = () => setIsDownDevise(!isDownDevise);
  const toggleDropDownFilter = () => setIsDownFilter(!isDownFilter);

  const toggleDeviseUSD = () => {
    setDevise('USD');
    setIsDownDevise(false);
  };
  const toggleDeviseBTC = () => {
    setDevise('BTC');
    setIsDownDevise(false);
  };

  const handleClickPagePrv = () =>
    setPage({ ...page, current: page.current - 1 });
  const handleClickPageNxt = () =>
    setPage({ ...page, current: page.current + 1 });

  const { colorScheme: theme } = useMantineColorScheme();

  return (
    <Paper
      sx={{
        padding: 'md',
        marginBottom: 15,
        backgroundColor: theme === 'dark' ? darkTheme?.body : lightTheme?.body,
      }}
    >
      <Grid gutter='md'>
        <Col
          span={12}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ marginRight: 10 }}>Devise: </Text>
          <Button onClick={toggleDropDownDevise} style={{ marginRight: 20 }}>
            {devise} {isDownDevise ? '▴' : '▾'}
          </Button>
          {isDownDevise && (
            <Grid gutter='md'>
              <Button onClick={toggleDeviseUSD}>USD</Button>
              <Button onClick={toggleDeviseBTC}>BTC</Button>
            </Grid>
          )}
          <Button onClick={toggleDropDownFilter} style={{ marginRight: 20 }}>
            Filter {isDownFilter ? '▴' : '▾'}
          </Button>
          {isDownFilter && (
            <Paper
              sx={{
                padding: 'md',
                position: 'absolute',
                backgroundColor:
                  theme === 'dark' ? darkTheme?.body : lightTheme?.body,
              }}
            >
              <Grid gutter='md'>
                <Grid gutter='md'>
                  <CoinsRankingFilters
                    changeFilter={changeFilter}
                    resetFilter={resetFilter}
                  />
                </Grid>
              </Grid>
            </Paper>
          )}
        </Col>
        <Col span={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button disabled={page.current === 1} onClick={handleClickPagePrv}>
            Previous
          </Button>
          <Text>
            {page.current} / {page.last}
          </Text>
          <Button
            disabled={page.current === page.last}
            onClick={handleClickPageNxt}
          >
            Next
          </Button>
        </Col>
      </Grid>
    </Paper>
  );
};

export default CoinRankingNavBar;
