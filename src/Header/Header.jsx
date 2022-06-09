import { Link } from "react-router-dom";
import css from "./Header.module.css";

export default function Header() {
    return (
        <header>
            <div className={css.Header}>
                <Link to="/" className={css.Logo}><img src="./assets/logo_forum.png" alt=""/>MONEY TIME</Link>
                <div className={navbar}>
                    <Link to="/" className={css.nba}>NBA</Link>
                    <Link to="/Login" className={css.nba}>LOGIN</Link>
                    <Link to="/Register" className={css.nba}>REGISTER</Link>
                </div>
            </div>
        </header>
    )
}