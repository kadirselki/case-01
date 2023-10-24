import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="app-header">
            <Link to="/" className="app-logo">
                <figure>
                    <img src="/public/images/logo.png" alt="Logo" width="60" height="60" />
                </figure>
                <span className="app-logo-text">
                    Star Employee
                    <span className="weak-text">&nbsp;Ballot</span>
                </span>
            </Link>
        </header>
    );
};
