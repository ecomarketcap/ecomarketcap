import { FilterInputsRefs } from '../types';

export const getFilterInputData = ({
  inputRefs,
}: {
  inputRefs: FilterInputsRefs;
}) => {
  return [
    {
      label: 'Min Cap',
      id: 'minCapInput',
      placeholder: '0',
      min: 0,
      max: 999999999999,
      ref: inputRefs.minCap,
    },
    {
      label: 'Max Cap',
      id: 'maxCapInput',
      placeholder: '999999999999',
      min: 0,
      max: 999999999999,
      ref: inputRefs.maxCap,
    },
    {
      label: 'Min Supply',
      id: 'minSupInput',
      placeholder: '0',
      min: 0,
      max: 999999999999,
      ref: inputRefs.minSup,
    },
    {
      label: 'Max Supply',
      id: 'maxSupInput',
      placeholder: '999999999999',
      min: 0,
      max: 999999999999,
      ref: inputRefs.maxSup,
    },
    {
      label: 'Min Var(h24)',
      id: 'minVarDayInput',
      placeholder: '-100',
      min: -100,
      max: 1000000,
      ref: inputRefs.minVarD,
    },
    {
      label: 'Max Var(h24)',
      id: 'maxVarDayInput',
      placeholder: '10000',
      min: -100,
      max: 1000000,
      ref: inputRefs.maxVarD,
    },
    {
      label: 'Min Var(ath)',
      id: 'minVarAthInput',
      placeholder: '-100',
      min: -100,
      max: 1000000,
      ref: inputRefs.minVarAth,
    },
    {
      label: 'Max Var(ath)',
      id: 'maxVarAthInput',
      placeholder: '10000',
      min: -100,
      max: 1000000,
      ref: inputRefs.maxVarAth,
    },
    {
      label: 'Min Price',
      id: 'minPriceInput',
      placeholder: '0',
      min: 0,
      max: 999999999999,
      ref: inputRefs.minPrice,
    },
    {
      label: 'Max Price',
      id: 'maxPriceInput',
      placeholder: '999999999999',
      min: 0,
      max: 999999999999,
      ref: inputRefs.maxPrice,
    },
  ];
};
