import Lock from "./components/Lock";
import TheButton from "./components/TheButton";
import Shackles from './components/Shackles';
import Title from "./components/Title";
import useLocks from "./hooks/useLocks";
import './app.css';

const App = () => {
  const { checkedOnce, checkedTwice, title, handleDialog } = useLocks();

  // make it scary; slowly increase creep factor
  // font changes; vibration effects
  // use modal instead of confirm function
  // then transition bg to black and on timeout, pull in a scary gif

	return (
		<div className="container">
			<Title text={title} />
      <Shackles>
        <Lock isLocked={!checkedOnce} />
        <Lock isLocked={!checkedTwice} />
      </Shackles>
			<TheButton handleClick={handleDialog}/>
		</div>
	);
};

export default App;
