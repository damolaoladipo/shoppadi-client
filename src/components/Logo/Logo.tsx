import { useEffect } from "react";
import { ILogo } from "../../utils/interface.util";


const Logo = (props: ILogo) => {
    const { src, alt, className = "" } = props;

    useEffect(() => {}, []);

    return (
        <>
            <img src={src} alt={alt} className={`logo ${className}`} />
        </>
    );
};

export default Logo