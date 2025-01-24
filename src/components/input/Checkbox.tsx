import { useEffect } from "react";
import { ICheckbox } from "../../utils/interface.util";

const Checkbox = (props: ICheckbox) => {
    const { label, checked, onChange } = props;

    useEffect(() => {}, []);

    return (
        <>
            <div className="checkbox">
                <input type="checkbox" checked={checked} onChange={onChange} />
                {label}
            </div>
        </>
    );
};

export default Checkbox