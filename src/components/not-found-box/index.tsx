import { INotFoundBoxProps } from './not-found-box.defs';

export const NotFoundBox = ({ message }: INotFoundBoxProps) => {
    return <div className="not-found-box">{message}</div>;
};
