import { createContext, useState } from 'react';

export interface IUnlockContext {
  currentLockIndex: number;
  title: string;
  transitionClass: string;
  updateLockScreen: (i: number, t: string) => void;
  addFadeToBlack: () => void;
};

export const UnlockContext = createContext<IUnlockContext>({
  currentLockIndex: 0,
  title: "I wouldn't touch those...",
  transitionClass: '',
  updateLockScreen: () => {},
  addFadeToBlack: () => {},
});

export const UnlockProvider = ({ children }: any) => {
  const [currentLockIndex, setCurrentLockIndex] = useState<number>(0);
  const [title, setTitle] = useState<string>("I wouldn't touch those...");
  const [transitionClass, setTransitionClass] = useState<string>('');
  const updateLockScreen = (index: number, newTitle: string) => {
    setCurrentLockIndex(index);
    setTitle(newTitle);
  }
  const addFadeToBlack = () => {
    if (currentLockIndex >= 3) {
      setTransitionClass(' fade-to-black');
    }
  }



  const unlockValues = {
    currentLockIndex,
    title,
    transitionClass,
    updateLockScreen,
    addFadeToBlack,
  }

  return (
    <UnlockContext.Provider value={unlockValues}>
      {children}
    </UnlockContext.Provider>
  );
}
