import { useContext } from 'react';
import { IUnlockContext, UnlockContext } from '../context/UnlockContext';

const confirmMessages: string[] = [
  'Are you sure?',
  'Are you really, really sure? Like really?',
  "You've lost your mind. Stop now. Please."
];

const titles: string[] = [
  "I wouldn't touch those...",
  'That was... ill-advised.',
  'Please. Stop. This is getting out of hand.',
  'This will not end well...',
  'Boo.'
];

const confirmUnlock = (index: number) => {
  return window.confirm(confirmMessages[index]);
}

const useLocks = () => {
  const unlockContext: IUnlockContext = useContext(UnlockContext);
  const {
    currentLockIndex,
    title,
    transitionClass,
    updateLockScreen,
  } = unlockContext;


  const handleDialog = () => {
    const allConfirmsComplete = currentLockIndex >= 3;

    if (!allConfirmsComplete) {
      const didConfirm: boolean = confirmUnlock(currentLockIndex);

      if (!didConfirm) return;
    }

    updateLockScreen(currentLockIndex + 1, titles[currentLockIndex + 1])
  };

  return {
    currentLockIndex,
    handleDialog,
    title,
    transitionClass,
  };
};

export default useLocks;
