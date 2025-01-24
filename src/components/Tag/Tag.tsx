import { useEffect } from "react";
import { ITag } from "../../utils/interface.util";


const Tag = (props: ITag) => {
    const { label, className = "", onRemove } = props;

    useEffect(() => {}, []);

    return (
        <>
            <div className={`tag ${className}`}>
                {label}
                {onRemove && <button onClick={onRemove}>&times;</button>}
            </div>
        </>
    );
};

export default Tag