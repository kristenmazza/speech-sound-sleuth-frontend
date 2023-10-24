import { Dispatch, SetStateAction } from 'react';
import { useOutletContext } from 'react-router-dom';

type HiddenImageType = {
  _id: string;
  name: string;
  imageUrl: string;
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
};

type ContextType = {
  setIsGamePage: Dispatch<SetStateAction<boolean>>;
  isGamePage: boolean;
  scene: object;
  setScene: Dispatch<SetStateAction<object>>;
  foundItems: HiddenImageType[];
  setFoundItems: Dispatch<SetStateAction<HiddenImageType[]>>;
};

export function useGameContext() {
  return useOutletContext<ContextType>();
}
