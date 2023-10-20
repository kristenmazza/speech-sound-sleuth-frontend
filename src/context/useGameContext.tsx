import { Dispatch, SetStateAction } from 'react';
import { useOutletContext } from 'react-router-dom';

type ContextType = {
  setIsGamePage: Dispatch<SetStateAction<boolean>>;
  isGamePage: boolean;
  scene: object;
  setScene: Dispatch<SetStateAction<object>>;
};

export function useGameContext() {
  return useOutletContext<ContextType>();
}
