import { useRef } from 'react';
import { FilterInputs } from '../types';

type UseFiltersProps = {
  changeFilter?: (filters: FilterInputs) => void;
  resetFilter?: () => void;
};

export const useFilters = ({ changeFilter }: UseFiltersProps) => {
  const inputRefs = {
    minCap: useRef<HTMLInputElement>(null),
    maxCap: useRef<HTMLInputElement>(null),
    minSup: useRef<HTMLInputElement>(null),
    maxSup: useRef<HTMLInputElement>(null),
    minVarD: useRef<HTMLInputElement>(null),
    maxVarD: useRef<HTMLInputElement>(null),
    minVarAth: useRef<HTMLInputElement>(null),
    maxVarAth: useRef<HTMLInputElement>(null),
    minPrice: useRef<HTMLInputElement>(null),
    maxPrice: useRef<HTMLInputElement>(null),
  };

  const changeFilterHandler = () => {
    changeFilter?.({
      minCap: parseFloat(inputRefs?.minCap?.current?.value || '0') || 0,
      maxCap:
        parseFloat(inputRefs?.maxCap?.current?.value || '999999999999') ||
        999999999999,
      minSup: parseFloat(inputRefs?.minSup?.current?.value || '0') || 0,
      maxSup:
        parseFloat(inputRefs?.maxSup?.current?.value || '999999999999') ||
        999999999999,
      minVarD: parseFloat(inputRefs?.minVarD?.current?.value || '-100') || -100,
      maxVarD:
        parseFloat(inputRefs?.maxVarD?.current?.value || '10000') || 10000,
      minVarAth:
        parseFloat(inputRefs?.minVarAth?.current?.value || '-100') || -100,
      maxVarAth:
        parseFloat(inputRefs?.maxVarAth?.current?.value || '10000') || 10000,
      minPrice: parseFloat(inputRefs?.minPrice?.current?.value || '0') || 0,
      maxPrice:
        parseFloat(inputRefs?.maxPrice?.current?.value || '999999999999') ||
        999999999999,
    });
  };

  const resetRefValue = (ref: React.RefObject<HTMLInputElement>) => {
    if (ref.current !== null) {
      ref.current.value = '';
    }
  };

  const resetFilterHandler = () => {
    Object.values(inputRefs).forEach(resetRefValue);

    changeFilter?.({
      minCap: 0,
      maxCap: 999999999999,
      minSup: 0,
      maxSup: 999999999999,
      minVarD: -100,
      maxVarD: 10000,
      minVarAth: -100,
      maxVarAth: 10000,
      minPrice: 0,
      maxPrice: 999999999999,
    });
  };

  return {
    inputRefs,
    changeFilterHandler,
    resetFilterHandler,
  };
};
