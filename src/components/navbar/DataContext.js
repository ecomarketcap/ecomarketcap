// import { createContext, Dispatch, SetStateAction } from 'react';

// type Coin = {
//   id: string;
//   name: string;
//   svg: string;
//   // Define other properties of a coin
// };

// type CoinsInfos = {
//   dictionary: Coin[];
//   list: Map<string, Coin>;
// };

// type Data = {
//   coinsInfos: CoinsInfos;
//   setCoinsInfos: Dispatch<
//     SetStateAction<{ dictionary: never[]; list: never[] }>
//   >;
// };

// const defaultValue: Data = {
//   coinsInfos: { dictionary: [], list: [] },
//   setCoinsInfos: () => {}, // Placeholder function or initial value for setCoinsInfos
// };

// export const DataContext = createContext<Data>(defaultValue);

// import { Dispatch, SetStateAction, createContext } from 'react';

// type CoinsInfos = {
//   list: [];
// };

// type Data = {
//   coinsInfos: CoinsInfos;
//   setCoinsInfos: Dispatch<SetStateAction<CoinsInfos>>;
// };

// const defaultValue: Data = {
//   coinsInfos: {
//     list: [],
//   },
//   setCoinsInfos: () => {}, // Placeholder function or initial value for setCoinsInfos
// };

// export const DataContext = createContext<Data>(defaultValue);
import { createContext } from 'react';

export const DataContext = createContext();
