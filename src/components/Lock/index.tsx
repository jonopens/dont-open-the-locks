import './lock.css';

type LockProps = {
  isLocked: boolean;
  shake: 'sm' | 'med' | 'big';
}

const Lock = (props: LockProps) => {
  const imgSrc = props.isLocked
    ? 'lock.png'
    : 'unlock.png';

  return (
    <div className={`lock ${props.isLocked ? '' : 'shake-' + props.shake}`}>
      <img
        src={imgSrc}
        width="150px"
        alt={`a ${props.isLocked ? '' : 'un'}shackled lock`}
      />
    </div>
  )
}

export default Lock;
