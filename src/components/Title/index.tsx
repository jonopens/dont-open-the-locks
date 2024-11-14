import './title.css';

type TitleProps = {
  text: string;
}

const Title = (props: TitleProps) => {
  return (
    <div className="title">
      {props.text}
    </div>
  )
}

export default Title;
