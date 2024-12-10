import Lock from '../Lock';
import useLocks from '../../hooks/useLocks';
import './shackles.css';

const Shackles = () => {
  const { currentLockIndex } = useLocks();

  return (
    <section className="shackles">
      <Lock isLocked={currentLockIndex < 1} shake="sm" />
      <Lock isLocked={currentLockIndex < 2} shake="med" />
      <Lock isLocked={currentLockIndex < 3} shake="big" />
    </section>
  );
};

export default Shackles;
