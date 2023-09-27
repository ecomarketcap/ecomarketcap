import { FilterInputsRefs } from '../types';

export const getFilterInputData = ({
  inputRefs,
}: {
  inputRefs: FilterInputsRefs;
}) => {
  return [
    {
      title: 'Capitalization',
      description: 'Set min and max capitalization',
      data: [
        {
          title: 'Min Cap',
          description: '',
          id: 'minCapInput',
          placeholder: 'min e.g. 0',
          min: 0,
          max: 999999999999,
          ref: inputRefs.minCap,
        },
        {
          title: 'Max Cap',
          description: '',
          id: 'maxCapInput',
          placeholder: 'max e.g. 999999999999',
          min: 0,
          max: 999999999999,
          ref: inputRefs.maxCap,
        },
      ],
    },

    {
      title: 'Supply',
      description: 'Set min and max supply',
      data: [
        {
          title: 'Min Supply',
          description: '',
          id: 'min e.g. minSupInput',
          placeholder: 'min e.g. 0',
          min: 0,
          max: 999999999999,
          ref: inputRefs.minSup,
        },
        {
          title: 'Max Supply',
          description: '',
          id: 'maxSupInput',
          placeholder: 'max e.g. 999999999999',
          min: 0,
          max: 999999999999,
          ref: inputRefs.maxSup,
        },
      ],
    },
    {
      title: 'Variance 24h',
      description: 'Set min and max 24h variance',
      data: [
        {
          title: 'Min Var(h24)',
          description: '',
          id: 'minVarDayInput',
          placeholder: 'min e.g. -100',
          min: -100,
          max: 1000000,
          ref: inputRefs.minVarD,
        },
        {
          title: 'Max Var(h24)',
          description: '',
          id: 'maxVarDayInput',
          placeholder: 'max e.g. 10000',
          min: -100,
          max: 1000000,
          ref: inputRefs.maxVarD,
        },
      ],
    },
    {
      title: 'Variance ATH',
      description: 'Set min and max all time high variance',
      data: [
        {
          title: 'Min Var(ath)',
          description: '',
          id: 'minVarAthInput',
          placeholder: 'min e.g. -100',
          min: -100,
          max: 1000000,
          ref: inputRefs.minVarAth,
        },
        {
          title: 'Max Var(ath)',
          description: '',
          id: 'maxVarAthInput',
          placeholder: 'max e.g. 10000',
          min: -100,
          max: 1000000,
          ref: inputRefs.maxVarAth,
        },
      ],
    },
    {
      title: 'Price',
      description: 'Set min and max price',
      data: [
        {
          title: 'Min Price',
          description: '',
          id: 'minPriceInput',
          placeholder: 'min e.g. 0',
          min: 0,
          max: 999999999999,
          ref: inputRefs.minPrice,
        },
        {
          title: 'Max Price',
          description: '',
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
