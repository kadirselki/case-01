import { CustomProgress } from '@components/custom-progress';
import { IconVote } from 'src/icons/svg-icons';
import { useConfetti } from 'src/hooks/useConfetti';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { avoidLinkOnClick } from 'src/helpers/avoid-link-on-click';
import { IVoteCardProps } from './vote-card.defs';

export const VoteCard = ({ data }: IVoteCardProps) => {
    const launchConfetti = useConfetti();
    const linkRef = useRef<HTMLAnchorElement>(null);
    const { name, surname, title, votes, photo } = data;

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
                    <CustomProgress value={10} max={100} />
                </div>
            </div>
            <button className="vote-button" onClick={launchConfetti}>
                <i>
                    <IconVote width={40} height={40} />
                </i>
                <span className="vote-button-count">{votes} vote</span>
            </button>
        </Link>
    );
};
