import { CustomProgress } from '@components/custom-progress';
import { IconVote } from 'src/icons/svg-icons';
import { useConfetti } from 'src/hooks/useConfetti';

export const VoteCard = () => {
    const launchConfetti = useConfetti();

    return (
        <div className="vote-card">
            <figure className="employee-image">
                <img src="https://via.placeholder.com/200x200" alt="Employee Name" />
            </figure>
            <div className="vote-card-content">
                <header className="vote-card-content-header">
                    <div>
                        <p className="employee-name">Kadir Selki</p>
                        <p className="employee-title">Front-end Developer</p>
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
                <span className="vote-button-count">49 vote</span>
            </button>
        </div>
    );
};
