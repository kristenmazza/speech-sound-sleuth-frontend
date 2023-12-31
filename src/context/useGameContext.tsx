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
  imageLoading: boolean;
  setImageLoading: Dispatch<SetStateAction<boolean>>;
  isPracticeTime: boolean;
  setIsPracticeTime: Dispatch<SetStateAction<boolean>>;
  isResumingTime: boolean;
  setIsResumingTime: Dispatch<SetStateAction<boolean>>;
  finalTime: number;
  setFinalTime: Dispatch<SetStateAction<number | null>>;
  isGameFinished: boolean;
  setIsGameFinished: Dispatch<SetStateAction<boolean>>;
};

export function useGameContext() {
  return useOutletContext<ContextType>();
}
