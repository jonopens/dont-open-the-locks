import './the-button.css';

const TheButton = (props: any) => {
  return (
    <button 
      aria-label="open the forbidden locks"
      type="button"
      className="the-button"
      onClick={props.handleClick}
    >
      <span className="the-button__text">Let it be freed.</span>
    </button>
  )
}

export default TheButton;
