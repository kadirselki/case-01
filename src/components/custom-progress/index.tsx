import { ICustomProgressProps } from './custom-progress.defs';

export const CustomProgress = ({ value, max }: ICustomProgressProps) => {
    const progress = (value / max) * 100;
    const style = {
        width: `${progress}%`,
    };
    return (
        <div className="custom-progress">
            <span className="percent-box">
                <span className="weak-text">%</span>
                {progress.toFixed(1)}
            </span>
            <div className="custom-progress-bar">
                <div className="custom-progress-value" style={style}></div>
            </div>
        </div>
    );
};
