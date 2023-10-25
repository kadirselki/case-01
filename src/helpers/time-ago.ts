const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

export const timeAgo = (timestamp: string): string => {
    const date = new Date(timestamp);
    const now = new Date();
    const seconds = Math.round((now.getTime() - date.getTime()) / 1000);
    const minutes = Math.round(seconds / 60);
    const hours = Math.round(minutes / 60);
    const days = Math.round(hours / 24);

    if (seconds < 60) return rtf.format(-seconds, 'second');
    else if (minutes < 60) return rtf.format(-minutes, 'minute');
    else if (hours < 24) return rtf.format(-hours, 'hour');

    return rtf.format(-days, 'day');
};
