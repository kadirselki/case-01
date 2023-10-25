import { timeAgo } from 'src/helpers/time-ago';
import { ILogItemProps } from './log-item.defs';
import { useEffect, useState } from 'react';

export const LogItem = ({ data }: ILogItemProps) => {
    const { message, date } = data;

    const [timeAgoText, setTimeAgoText] = useState(timeAgo(date));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeAgoText(timeAgo(date));
        }, 1000);

        return () => clearInterval(intervalId);
    }, [date]);

    return (
        <div className="log-item">
            <span className="message">{message}</span>
            <span className="time">{timeAgoText}</span>
        </div>
    );
};
