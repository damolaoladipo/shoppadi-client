import { useEffect } from "react";
import { IProgressTracker } from "../../utils/interface.util";

const ProgressTracker = (props: IProgressTracker) => {
    const { steps, currentStep } = props;

    useEffect(() => {}, []);

    return (
        <>
            <div className="progress-tracker">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`progress-step ${index <= currentStep ? "active" : ""}`}
                    >
                        {step}
                    </div>
                ))}
            </div>
        </>
    );
};


export default ProgressTracker