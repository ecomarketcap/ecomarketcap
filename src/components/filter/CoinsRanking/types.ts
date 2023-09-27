import { RefObject } from 'react';

type FilterInputKeys =
  | 'minCap'
  | 'maxCap'
  | 'minSup'
  | 'maxSup'
  | 'minVarD'
  | 'maxVarD'
  | 'minVarAth'
  | 'maxVarAth'
  | 'minPrice'
  | 'maxPrice';

export type FilterInputs = {
  [K in FilterInputKeys]: number | string;
};

export type FilterInputsRefs = {
  [K in FilterInputKeys]: RefObject<HTMLInputElement> | undefined;
};
export type ChangeFilter = (filters: FilterInputs) => void;
