import { forwardRef } from "react";
import styles from "./FancyButton.module.css";

const FancyButton = forwardRef(({ href, text, onClick, classbtn }, ref) => (
  <a ref={ref} href={href} onClick={onClick} className={classbtn}>
    {text}
  </a>
));

export default FancyButton;
