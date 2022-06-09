import { css } from "@emotion/react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (

            <Link to="/nba" className={css.nba}>NBA</Link>

    )
}