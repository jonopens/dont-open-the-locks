import useLocks from '../../hooks/useLocks';
import './the-button.css';

const TheButton = () => {
  const { handleDialog } = useLocks();

  return (
    <button 
      aria-label="open the forbidden locks"
      type="button"
      className="the-button"
      onClick={handleDialog}
    >
      <span className="the-button__text">Let it be freed.</span>
    </button>
  )
}

export default TheButton;
