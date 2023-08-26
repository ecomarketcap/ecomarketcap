import { FilterInputsRefs } from '../types';

export const getFilterInputData = ({
  inputRefs,
}: {
  inputRefs: FilterInputsRefs;
}) => {
  return [
    {
      label: 'Capitalization',
      description: 'Set min and max capitalization',
      data: [
        {
          label: 'Min Cap',
          id: 'minCapInput',
          placeholder: 'min e.g. 0',
          min: 0,
          max: 999999999999,
          ref: inputRefs.minCap,
        },
        {
          label: 'Max Cap',
          id: 'maxCapInput',
          placeholder: 'max e.g. 999999999999',
          min: 0,
          max: 999999999999,
          ref: inputRefs.maxCap,
        },
      ],
    },

    {
      label: 'Supply',
      description: 'Set min and max supply',
      data: [
        {
          label: 'Min Supply',
          id: 'min e.g. minSupInput',
          placeholder: 'min e.g. 0',
          min: 0,
          max: 999999999999,
          ref: inputRefs.minSup,
        },
        {
          label: 'Max Supply',
          id: 'maxSupInput',
          placeholder: 'max e.g. 999999999999',
          min: 0,
          max: 999999999999,
          ref: inputRefs.maxSup,
        },
      ],
    },
    {
      label: 'Variance 24h',
      description: 'Set min and max 24h variance',
      data: [
        {
          label: 'Min Var(h24)',
          id: 'minVarDayInput',
          placeholder: 'min e.g. -100',
          min: -100,
          max: 1000000,
          ref: inputRefs.minVarD,
        },
        {
          label: 'Max Var(h24)',
          id: 'maxVarDayInput',
          placeholder: 'max e.g. 10000',
          min: -100,
          max: 1000000,
          ref: inputRefs.maxVarD,
        },
      ],
    },
    {
      label: 'Variance ATH',
      description: 'Set min and max all time high variance',
      data: [
        {
          label: 'Min Var(ath)',
          id: 'minVarAthInput',
          placeholder: 'min e.g. -100',
          min: -100,
          max: 1000000,
          ref: inputRefs.minVarAth,
        },
        {
          label: 'Max Var(ath)',
          id: 'maxVarAthInput',
          placeholder: 'max e.g. 10000',
          min: -100,
          max: 1000000,
          ref: inputRefs.maxVarAth,
        },
      ],
    },
    {
      label: 'Price',
      description: 'Set min and max price',
      data: [
        {
          label: 'Min Price',
          id: 'minPriceInput',
          placeholder: 'min e.g. 0',
          min: 0,
          max: 999999999999,
          ref: inputRefs.minPrice,
        },
        {
          label: 'Max Price',
          id: 'maxPriceInput',
          placeholder: 'max e.g. 999999999999',
          min: 0,
          max: 999999999999,
          ref: inputRefs.maxPrice,
        },
      ],
    },
  ];
};
