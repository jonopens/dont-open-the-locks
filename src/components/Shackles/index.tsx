import { PropsWithChildren } from "react";
import './shackles.css';

const Shackles = (props: PropsWithChildren) => {
  return (
    <section className="shackles">
      {props.children}
    </section>
  );
};

export default Shackles;
