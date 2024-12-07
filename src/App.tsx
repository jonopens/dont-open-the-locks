import Audio from "./components/Audio";
import Lock from "./components/Lock";
import Shackles from './components/Shackles';
import TheButton from "./components/TheButton";
import Title from "./components/Title";
import useLocks from "./hooks/useLocks";
import './app.css';
import Jumpscare from "./components/Monster";

const App = () => {
  const {
    currentLockIndex,
    handleDialog,
    title,
    transitionClass,
  } = useLocks();

  // make it scary; slowly increase creep factor
  // font changes; vibration effects
  // use modal instead of confirm function
  // then transition bg to black and on timeout, pull in a scary gif

	return (
    <div className={`container${transitionClass}`}>
      {currentLockIndex < 4 && (
        <>
          <Title text={title} />
          <Shackles>
            <Lock isLocked={currentLockIndex < 1} shake="sm" />
            <Lock isLocked={currentLockIndex < 2} shake="med" />
            <Lock isLocked={currentLockIndex < 3} shake="big" />
          </Shackles>
          <TheButton handleClick={handleDialog} />
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
