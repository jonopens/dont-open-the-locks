import useLocks from '../../hooks/useLocks';
import './title.css';

const Title = () => {
  const { title } = useLocks();

  return (
    <div className="title">
      {title}
    </div>
  )
}

export default Title;
