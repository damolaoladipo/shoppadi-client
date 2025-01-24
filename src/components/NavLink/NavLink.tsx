import { Link } from "react-router-dom";
import { INavLink } from "../../utils/interface.util";
import { useEffect } from "react";

const NavLink = (props: INavLink) => {
    const { to, label } = props;

    useEffect(() => {}, []);

    return (
        <>
            <Link className="nav-link" to={to}>
                {label}
            </Link>
        </>
    );
};

export default NavLink