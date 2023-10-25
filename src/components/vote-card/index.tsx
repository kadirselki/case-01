import { CustomProgress } from '@components/custom-progress';
import { IconVote } from 'src/icons/svg-icons';
import { useConfetti } from 'src/hooks/useConfetti';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { avoidLinkOnClick } from 'src/helpers/avoid-link-on-click';
import { IVoteCardProps } from './vote-card.defs';
import { useDispatch, useSelector } from 'react-redux';
import { setVotes } from 'src/store/slices/employees.slice';
import { RootState } from 'src/store';
import classNames from 'classnames';

export const VoteCard = ({ data }: IVoteCardProps) => {
    const dispatch = useDispatch();
    const totalVotes = useSelector((state: RootState) => state.app.totalVotes);
    const launchConfetti = useConfetti();
    const linkRef = useRef<HTMLAnchorElement>(null);
    const [clicked, setClicked] = useState(false);
    const { name, surname, title, votes, photo, id } = data;

    const handleVote = () => {
        setClicked(true);
        setTimeout(() => setClicked(false), 80);
        const count = votes + 1;
        dispatch(setVotes({ id, votes: count }));
        launchConfetti();
    };

    return (
        <Link
            className="vote-card"
            to={`/employee/01`}
            ref={linkRef}
            onClick={(e) => avoidLinkOnClick(e, linkRef, 'vote-button')}
        >
            <figure className="employee-image">
                <img src={photo} alt="Employee Name" />
            </figure>
            <div className="vote-card-content">
                <header className="vote-card-content-header">
                    <div>
                        <p className="employee-name">
                            {name} {surname}
                        </p>
                        <p className="employee-title">{title}</p>
                    </div>
                </header>
                <div className="progress-wrapper">
                    <CustomProgress value={votes} max={totalVotes} />
                </div>
            </div>
            <button
                className={classNames('vote-button', {
                    clicked,
                })}
                onClick={() => handleVote()}
            >
                <i>
                    <IconVote width={40} height={40} />
                </i>
                <span className="vote-button-count">
                    <b>{votes}</b> vote
                </span>
            </button>
        </Link>
    );
};
