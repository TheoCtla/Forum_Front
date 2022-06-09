import { Link } from "react-router-dom";
import css from "./Logo.module.css"
export default function Logo() {
  return (
    <div className={css.Header}>
      <Link to="/" className={css.Logo}><img src="./assets/logo_forum.png" alt=""/>MONEY TIME</Link>
    </div>
  );
}
