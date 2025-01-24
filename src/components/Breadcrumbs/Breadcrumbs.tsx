import React , { useEffect } from "react";
import { IBreadcrumbs } from "../../utils/interface.util";
import { Link } from "react-router-dom";

const Breadcrumbs = (props: IBreadcrumbs) => {
    const { links } = props;

    useEffect(() => {}, []);

    return (
        <>
            <nav className="breadcrumbs">
                {links.map((link, index) => (
                    <React.Fragment key={index}>
                        <Link to={link.to}>{link.label}</Link>
                        {index < links.length - 1 && <span> / </span>}
                    </React.Fragment>
                ))}
            </nav>
        </>
    );
};

export default Breadcrumbs