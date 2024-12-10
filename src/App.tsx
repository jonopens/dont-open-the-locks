import { useEffect, useState } from 'react';
import Audio from './components/Audio';
import Jumpscare from './components/Monster';
import Shackles from './components/Shackles';
import TheButton from './components/TheButton';
import Title from './components/Title';
import useLocks from './hooks/useLocks';
import './app.css';

const App = () => {
  const { currentLockIndex } = useLocks();
  const [transitionClass, setTransitionClass] = useState<string>('');
  useEffect(() => {
    if (currentLockIndex >= 3) {
      setTransitionClass(' fade-to-black');
    }
  }, [currentLockIndex]);

  // make it scary; slowly increase creep factor
  // font changes; vibration effects
  // use modal instead of confirm function
  // then transition bg to black and on timeout, pull in a scary gif

	return (
    <div className={`container${transitionClass}`}>
      {currentLockIndex < 4 && (
        <>
          <Title />
          <Shackles />
          <TheButton />
        </>
      )}
      {currentLockIndex >= 4 && (
        <>
          <Audio />
          <Jumpscare />
        </>
      )}
    </div>
  );
};

export default App;
