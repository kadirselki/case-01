import { Link, useLocation } from 'react-router-dom';

export const Footer = () => {
    const location = useLocation();

    if (location.pathname === '/logs') return null;
    return (
        <Link to="/logs" className="app-footer">
            <p>View Logs</p>
        </Link>
    );
};
