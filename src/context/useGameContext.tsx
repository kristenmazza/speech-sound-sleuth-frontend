import { Dispatch, SetStateAction } from 'react';
import { useOutletContext } from 'react-router-dom';

type ContextType = {
  setIsGamePage: Dispatch<SetStateAction<boolean>>;
  isGamePage: boolean;
};

export function useGameContext() {
  return useOutletContext<ContextType>();
}
