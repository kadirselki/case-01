import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'src/store';

export const Header = () => {
    const totalVotes = useSelector((state: RootState) => state.app.totalVotes);

    return (
        <header className="app-header">
            <Link to="/" className="app-logo">
                <figure>
                    <img src="/images/logo.png" alt="Logo" width="60" height="60" />
                </figure>
                <span className="app-logo-text">
                    Star Employee
                    <span className="weak-text">&nbsp;Ballot</span>
                </span>
            </Link>

            <div className="app-header-infos">
                <p className="total-votes">
                    Total Votes: <b>{totalVotes}</b>
                </p>
            </div>
        </header>
    );
};
