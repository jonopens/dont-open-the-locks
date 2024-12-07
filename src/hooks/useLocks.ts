import { useEffect, useState } from 'react';

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
  const [currentLockIndex, setCurrentLockIndex] = useState<number>(0);
  const [title, setTitle] = useState<string>(titles[currentLockIndex]);
  const [transitionClass, setTransitionClass] = useState<string>('');

  useEffect(() => {
    const allConfirmsComplete = currentLockIndex >= 3;

    setTitle(titles[currentLockIndex]);
    if (allConfirmsComplete) {
      setTransitionClass(' fade-to-black');
    }
  }, [currentLockIndex]);

  const handleDialog = () => {
    const allConfirmsComplete = currentLockIndex >= 3;

    if (!allConfirmsComplete) {
      const didConfirm: boolean = confirmUnlock(currentLockIndex);

      if (!didConfirm) return;
    }

    setCurrentLockIndex(currentLockIndex + 1);
  };

  console.log('state: ')
  console.log({
    currentLockIndex,
    title,
    transitionClass,
  })

  return {
    currentLockIndex,
    handleDialog,
    title,
    transitionClass,
  };
};

export default useLocks;
